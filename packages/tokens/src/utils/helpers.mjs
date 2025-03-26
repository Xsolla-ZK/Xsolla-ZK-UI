import path from 'path';

/**
 * @param {string} key
 * @returns {string|boolean|undefined}
 */
export function getArgValue(key) {
  const args = process.argv.slice(2);
  const index = args.indexOf(`--${key}`);
  if (index === -1) return undefined;

  const nextArg = args[index + 1];
  if (!nextArg || nextArg.startsWith('-')) {
    return true;
  }

  return nextArg;
}

/**
 * @param {string} str
 * @returns {string}
 */
export function camelize(str) {
  if (/^[a-z][A-Za-z0-9]*$/.test(str)) return str;
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

/**
 * @param {string} str
 * @returns {string}
 */
export function kebabize(str) {
  return str
    .split('')
    .map((letter, idx) =>
      letter.toUpperCase() === letter ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}` : letter,
    )
    .join('');
}

/**
 * @param {string} val
 * @returns {string}
 */
export function capitalizeFirstLetter(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

/**
 * @param {string} str
 * @returns {boolean}
 */
export function isNumeric(str) {
  if (typeof str !== 'string' && typeof str !== 'number') return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

/**
 *
 * @param {any[]} arr
 * @returns {boolean}
 */

export function hasSingleNumericValue(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length !== 1) return false;

  const value = +arr[0];

  return !Number.isNaN(value);
}

/**
 * @param {string} from
 * @param {string} to
 * @returns {string}
 */
export function getRelativePath(from, to) {
  return path.relative(path.dirname(from), to);
}

/**
 * @param {object} obj
 * @param {string} path
 * @returns {any}
 */
export function pickByDotNotation(obj, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc && Object.hasOwn(acc, key)) {
      return acc[key];
    }
    return undefined;
  }, obj);
}

/**
 * @param {object} obj
 * @returns {boolean}
 */
export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

/**
 * @param {object} obj
 * @returns {object}
 */
export function withoutEmpty(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_key, value]) =>
        value !== undefined && value !== '' && value !== null && !isEmptyObject(value),
    ),
  );
}

/**
 * @returns {string}
 */
export function getInputPath() {
  return process.env.XSOLLA_ZK_UI_TOKENS_INPUT_PATH ?? '';
}

/**
 * @returns {string}
 */
export function getOutputPath() {
  return process.env.XSOLLA_ZK_UI_TOKENS_OUTPUT_PATH ?? '';
}

/**
 * @param {string} filename
 * @param {string} ext
 * @returns {string}
 */
export function getDesignTokensFile(filename, ext = 'json') {
  return path.join(getInputPath(), 'tokens', `${filename}.${ext}`);
}

/**
 * @returns {string}
 */
export function getBuildPath() {
  const defaultOutPath = 'tokens';

  return path.join(getOutputPath() ?? defaultOutPath);
}

/**
 * @param {object} obj
 * @param {string} [separator='.']
 * @param {string} [prefix='']
 * @returns {object}
 */
export function flattenObject(obj, separator = '.', prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = prefix ? `${prefix}${separator}${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(acc, flattenObject(obj[key], separator, newKey));
    } else {
      acc[newKey] = obj[key];
    }

    return acc;
  }, {});
}

/**
 * @param {string} val
 * @param {string} group
 * @returns {string}
 */
export function getByReservedWords(val, group = '') {
  const reservedWords = {
    switch: true,
    case: true,
    default: true,
    break: true,
    continue: true,
    return: true,
  };

  return reservedWords[val] ? val + group : val;
}
