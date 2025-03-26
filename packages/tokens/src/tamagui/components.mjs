import { VALID_PROPS } from '../utils/constants.mjs';
import { getFormatConfig } from '../utils/config.mjs';
import { camelize, isNumeric, withoutEmpty } from '../utils/helpers.mjs';
import { getBreakpointsStorage, getTokensStorage } from '../utils/storage.mjs';

function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}

function processBreakpointObject(obj, orderList, breakpointsStorage) {
  let lastValue;
  const result = {};
  for (const bpKey of orderList) {
    if (!(bpKey in obj)) continue;
    const current = getStrictTokenValue(obj[bpKey], bpKey);
    if (lastValue !== undefined && deepEqual(lastValue, current)) {
      continue;
    }
    const breakpointKeyMap = breakpointsStorage.get(bpKey);
    result[breakpointKeyMap] = current;
    lastValue = current;
  }
  const resultKeys = Object.keys(result);

  if (resultKeys.length === 1) {
    return result[resultKeys[0]];
  }
  return withoutEmpty(result);
}

function checkTokenByPath(path) {
  const tokensStorage = getTokensStorage();
  const { transformKey } = getFormatConfig();
  const clearPath = path.replace(/{|}/g, '');
  const clearPathArray = clearPath.split('.');
  const tokenInStorage = tokensStorage.get(clearPath);

  if (!tokenInStorage) return path;

  const token = clearPathArray.map((key) => transformKey(key)).join('.');

  if (tokenInStorage.group) {
    return `$${tokenInStorage.group}.${token}`;
  }

  return `$${token}`;
}

function getStrictTokenValue(obj, key) {
  const breakpointsStorage = getBreakpointsStorage();

  if (obj && typeof obj === 'object' && 'type' in obj) {
    if (obj.description === 'figma-only') {
      return null;
    }
    const currentKey = camelize(key);

    if (VALID_PROPS[currentKey] || breakpointsStorage.has(currentKey)) {
      if (/{|}/g.test(obj.value)) {
        return checkTokenByPath(obj.value);
      }
      return obj.value;
    }

    return null;
  }

  if (obj && typeof obj === 'object') {
    const result = {};
    const orderList = breakpointsStorage.get('order');
    const isBreakpointObject = orderList && orderList.some((k) => Object.hasOwn(obj, k));

    if (isBreakpointObject) {
      return processBreakpointObject(obj, orderList, breakpointsStorage);
    }

    for (const [key, value] of Object.entries(obj)) {
      const val = getStrictTokenValue(value, key);
      if (val !== null) {
        const tokenizedKey = isNumeric(key) ? `$${key}` : camelize(key);

        result[tokenizedKey] = val;
      }
    }

    return withoutEmpty(result);
  }

  return obj;
}

async function transformGroupComponents(rawData, _sources, _variant) {
  const data = getStrictTokenValue(rawData);

  return data;
}

export default transformGroupComponents;
