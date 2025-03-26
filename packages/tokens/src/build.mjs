import { getFormatConfig } from './utils/config.mjs';
import { processGroupFiles } from './utils/file-processing.mjs';
import { cleanGeneratedFiles, finalizeGeneration, readJsonFile } from './utils/files.mjs';
import { flattenObject, getDesignTokensFile } from './utils/helpers.mjs';
import { setTokensStorage } from './utils/storage.mjs';
import { logger } from './utils/log.mjs';
import { getGroupMap } from './utils/parser.mjs';
import { getTransform, getTransformGroup } from './utils/transforms.mjs';
import { getValueRecursively } from './utils/values.mjs';

const groupOrder = ['common', 'platform'];

/**
 * @param {string} variant
 * @param {string} group
 * @param {object} groupData
 * @param {object} pathsGroupData
 * @returns {Promise<object>}
 */
async function processVariant(variant, group, groupData, pathsGroupData) {
  const transformMap = getTransform();
  const transformGroupMap = getTransformGroup();
  const { transformGroupKey } = getFormatConfig();
  const sources = await Promise.all(
    Object.values(groupData.source).map(
      async (filePath) => await readJsonFile(getDesignTokensFile(filePath)),
    ),
  );
  const mergedSources = Object.assign({}, ...sources);

  const inputs = await Promise.all(
    Object.entries(groupData.input)
      .map(async ([key, filePath]) => {
        const jsonContent = await readJsonFile(getDesignTokensFile(filePath));
        if (transformGroupMap[group]) {
          if (typeof transformGroupMap[group] === 'object') {
            if (transformGroupMap[group].values) {
              return transformGroupMap[group].values(jsonContent, mergedSources, variant);
            }
          } else {
            return transformGroupMap[group](jsonContent, mergedSources, variant);
          }
        }
        if (transformMap[key]) {
          return transformMap[key](jsonContent, mergedSources, variant);
        }
        return getValueRecursively(jsonContent, mergedSources);
      })
      .filter(Boolean),
  );

  const mergedInputs = Object.assign({}, ...inputs);
  const groupTransform = transformGroupKey(group);

  const isGroupVarianted = pathsGroupData[`${group}/${variant}`];

  if (groupOrder.includes(group)) {
    Object.entries(flattenObject(mergedInputs)).forEach(([key, value]) => {
      setTokensStorage(key, {
        group: isGroupVarianted ? group : null,
        value,
      });
    });
  }

  if (isGroupVarianted) {
    return {
      [groupTransform]: {
        [variant]: mergedInputs,
      },
    };
  }

  return {
    [groupTransform]: mergedInputs,
  };
}

async function processVariants(data, group, pathsGroupData) {
  const { transformGroupKey } = getFormatConfig();
  const groupTransform = transformGroupKey(group);

  const variantResults = await Promise.all(
    data.map(async (variant) => {
      const groupData = pathsGroupData[`${group}/${variant}`] ?? pathsGroupData[group];
      return processVariant(variant, group, groupData, pathsGroupData);
    }),
  );

  const files = variantResults.reduce((acc, result) => {
    Object.entries(result).forEach(([key, value]) => {
      acc[key] = acc[key] || {};
      Object.assign(acc[key], value);
    });
    return acc;
  }, {});

  await processGroupFiles(files, groupTransform);
}

async function processAllGroups(groupOrder) {
  const $metadata = await readJsonFile(getDesignTokensFile('$metadata'));
  const { groupMap, pathsGroupData } = await getGroupMap($metadata);

  const orders = Array.isArray(groupOrder) ? groupOrder : [groupOrder];
  const groups = new Map(Object.entries(groupMap));

  for (const group of orders) {
    const variants = groups.get(group);
    if (variants) {
      await processVariants(variants, group, pathsGroupData);
      groups.delete(group);
    }
  }

  await Promise.all(
    Array.from(groups.entries()).map(([group, variants]) =>
      processVariants(variants, group, pathsGroupData),
    ),
  );
}

async function run() {
  try {
    // Clean previous generated files
    logger.info('Cleaning previous generated files...');
    const { files, directories } = await cleanGeneratedFiles();

    if (files > 0 || directories > 0) {
      const details = [];
      if (files > 0) details.push(`${files} files`);
      if (directories > 0) details.push(`${directories} directories`);
      logger.success(`Removed ${details.join(' and ')}`);
    }

    await processAllGroups(groupOrder);

    // Save the list of generated files
    await finalizeGeneration();
  } catch (error) {
    logger.error('Error generating tokens:', error);
    throw error;
  }
}

export default run;
