const fse = require('fs-extra');
const path = require('path');

function toCamelCase(text) {
  return text.replace(/-\w/g, clearAndUpper);
}

function toPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text) {
  return text.replace(/-/, '').toUpperCase();
}

/**
 * Рекурсивное преобразование токенов в плоскую структуру.
 * @param {Object} obj - Исходные токены
 * @param {string} prefix - Префикс для вложенных токенов
 * @returns {Object} - Преобразованные токены
 */
function flattenTokens(obj, prefix = '') {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = prefix ? `${prefix}-${key}` : key;

    if (value && typeof value === 'object' && 'value' in value) {
      acc[newKey] = value.type === 'number' ? value.value + 'px' : value.value;
    } else if (typeof value === 'object') {
      Object.assign(acc, flattenTokens(value, newKey));
    }

    return acc;
  }, {});
}

/**
 * Генерация TypeScript и CSS файлов из токенов.
 * @param {string} filePath - Путь к JSON файлу токенов
 * @param {string} outputPath - Базовая директория для TypeScript и CSS файлов
 */
async function processTokenFile(filePath, outputPath) {
  const tokens = await fse.readJson(filePath);
  const flatTokens = flattenTokens(tokens);

  const dir = path.dirname(outputPath);
  await fse.ensureDir(dir);

  const args = process.argv.slice(2);

  const outputPathArray = outputPath.split('/');
  [1, 2, 3].reduce((acc, curr) => {
    acc['some'] = curr;
    return acc;
  }, {});
  const variableName = outputPathArray
    .slice(outputPathArray.length - 2)
    .reduce((acc, curr, idx) => {
      const item = idx > 0 ? toPascalCase(curr) : curr;
      return acc !== curr ? acc + item : acc;
    }, '');

  // Генерация TypeScript файла
  if (args.includes('--ts') || args.includes('--all')) {
    const tsFilePath = `${outputPath}.ts`;
    const tsContent = `const ${variableName} = ${JSON.stringify(flatTokens, null, 2)};\n\nexport default ${variableName};\n`;
    await fse.writeFile(tsFilePath, tsContent);
  }

  // Генерация CSS файла
  if (args.includes('--css') || args.includes('--all')) {
    const cssFilePath = `${outputPath}.css`;
    const cssContent = Object.entries(flatTokens)
      .map(([key, value]) => `--${key}: ${value};`)
      .join('\n');
    await fse.writeFile(cssFilePath, `:root {\n${cssContent}\n}`);
  }
}

/**
 * Генерация TypeScript и CSS файлов из токенов.
 */
async function generateTokens() {
  const metaFilePath = './design-tokens/tokens/$metadata.json';
  const tokensBasePath = './design-tokens/tokens/';
  const outputBasePath = './tokens';

  // Загрузка метафайла
  const { tokenSetOrder } = await fse.readJson(metaFilePath);

  // Обработка каждого файла токенов
  for (const tokenSet of tokenSetOrder) {
    const inputFilePath = path.join(tokensBasePath, `${tokenSet}.json`);
    const outputFilePath = path.join(outputBasePath, tokenSet);

    console.log(`Processing: ${inputFilePath} -> ${outputFilePath}`);
    await processTokenFile(inputFilePath, outputFilePath);
  }

  console.log('Design tokens were successfully transformed!');
}

generateTokens();
