import { readJsonFile } from './files.mjs';
import { getDesignTokensFile } from './helpers.mjs';
import { getFormatConfig } from './config.mjs';
let globalGroup;

const bannedGroups = ['semantic/_', 'figma-only'];
const whitelistGroup = {
  theme: true,
  platform: true,
};

const ungroupedTokensMap = {
  semantic: 'components',
  common: 'common',
};

/**
 * @param {Record<string, string>} selectedTokenSets
 * @param {{ group: string, name: string }} options
 * @returns {{ input: Record<string, string>, source: Record<string, string> }}
 */
function getSelectedTokenSets(selectedTokenSets, { name }) {
  return Object.entries(selectedTokenSets).reduce(
    (acc, [rawKey, value]) => {
      const pathParts = rawKey.split('/');
      const fileKey = pathParts.pop();
      const key = fileKey === name ? pathParts.pop() : fileKey;

      const currentKey = getFormatConfig().transformKey(key);
      if (value === 'source') {
        acc.source[currentKey] = rawKey;
      }
      if (value === 'enabled') {
        acc.input[currentKey] = rawKey;
        acc.source[currentKey] = rawKey;
      }

      return acc;
    },
    { input: {}, source: {} },
  );
}

/**
 * @param {{ tokenSetOrder: string[] }} metadata
 * @returns {{ groupMap: Record<string, string[]>, pathsGroupData: Record<string, { input: Record<string, string>, source: Record<string, string> }> }}
 */
export async function getGroupMap(metadata) {
  if (globalGroup) return globalGroup;
  const $themes = await readJsonFile(getDesignTokensFile('$themes'));

  const groupMap = {};
  const used = new Set(bannedGroups);

  const groupData = $themes.reduce((acc, { group, name, selectedTokenSets }) => {
    if (whitelistGroup[group]) {
      const variant = getFormatConfig().transformKey(name);
      const key = `${group}/${variant}`;
      const selectedTokens = getSelectedTokenSets(selectedTokenSets, { group, name });

      if (!acc[key]) {
        acc[key] = { input: {}, source: {} };
      }

      Object.keys(selectedTokens).forEach((token) => {
        Object.assign(acc[key][token], selectedTokens[token]);
      });

      Object.keys(selectedTokens.input).forEach((token) => used.add(token));

      if (groupMap[group]) {
        groupMap[group].push(variant);
      } else {
        groupMap[group] = [variant];
      }
    }

    return acc;
  }, {});

  const ungroupedRaw = metadata.tokenSetOrder.filter(
    (item) => !Array.from(used).some((group) => item.includes(group)),
  );

  const processUngroupedToken = (acc, rawKey) => {
    const pathParts = rawKey.split('/');
    const ungroupedRawKey = pathParts[0];
    const fileKey = pathParts.pop();
    const currentKey = getFormatConfig().transformKey(fileKey);
    const ungroupedKey = ungroupedTokensMap[ungroupedRawKey];

    if (!ungroupedKey) return acc;

    acc[ungroupedKey] ??= { input: {}, source: {} };
    acc[ungroupedKey].input[currentKey] = rawKey;
    acc[ungroupedKey].source[currentKey] = rawKey;

    if (ungroupedKey === 'common') {
      Object.keys(acc).forEach((key) => {
        if (key !== 'common') {
          acc[key].source[currentKey] = rawKey;
        }
      });
    }

    // Update groupMap
    if (groupMap[ungroupedKey]) {
      groupMap[ungroupedKey].push(currentKey);
    } else {
      groupMap[ungroupedKey] = [currentKey];
    }

    return acc;
  };

  const initialAcc = Object.values(ungroupedTokensMap).reduce((acc, curr) => {
    acc[curr] = { input: {}, source: {} };
    return acc;
  }, {});

  const ungroupedPathsData = ungroupedRaw.reduce(processUngroupedToken, initialAcc);

  globalGroup = {
    groupMap,
    pathsGroupData: {
      ...groupData,
      ...ungroupedPathsData,
    },
  };

  return globalGroup;
}
