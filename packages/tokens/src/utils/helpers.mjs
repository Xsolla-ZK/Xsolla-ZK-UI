import path from 'path';

/**
 *
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

export function camelize(str) {
  if (/^[a-z][A-Za-z0-9]*$/.test(str)) return str;
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export function kebabize(str) {
  return str
    .split('')
    .map((letter, idx) =>
      letter.toUpperCase() === letter ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}` : letter,
    )
    .join('');
}

export function capitalizeFirstLetter(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

export function isNumeric(str) {
  if (typeof str !== 'string') return false;
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  );
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

export function getRelativePath(from, to) {
  return path.relative(path.dirname(from), to);
}

export function pickByDotNotation(obj, path) {
  return path.split('.').reduce((acc, key) => {
    if (acc && Object.hasOwn(acc, key)) {
      return acc[key];
    }
    return undefined;
  }, obj);
}

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function withoutEmpty(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_key, value]) =>
        value !== undefined && value !== '' && value !== null && !isEmptyObject(value),
    ),
  );
}

export function getInputPath() {
  return process.env.XSOLLA_ZK_UI_TOKENS_INPUT_PATH ?? '';
}

export function getOutputPath() {
  return process.env.XSOLLA_ZK_UI_TOKENS_OUTPUT_PATH ?? '';
}

export function getDesignTokensFile(filename, ext = 'json') {
  return `${getInputPath()}/tokens/${filename}.${ext}`;
}

export function getBuildPath() {
  const defaultOutPath = './tokens';

  return getOutputPath() ?? defaultOutPath;
}
