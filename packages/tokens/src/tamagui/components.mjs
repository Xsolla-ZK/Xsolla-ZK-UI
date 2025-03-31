import { VALID_PROPS } from '../utils/constants.mjs';
import { getFormatConfig } from '../utils/config.mjs';
import { camelize, isNumeric, withoutEmpty } from '../utils/helpers.mjs';
import { getBreakpointsStorage, getSharedStorage, getTokensStorage } from '../utils/storage.mjs';

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

function processBreakpointObject(obj, orderList, breakpointsStorage, refOnly) {
  let lastValue;
  const result = {};
  for (const bpKey of orderList) {
    if (!(bpKey in obj)) continue;
    const current = getStrictTokenValue(obj[bpKey], bpKey, refOnly);
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

function extractVariables(text) {
  return text.match(/\{[^}]+\}|[^.]+/g);
}

function checkTokenByPath(path) {
  const tokensStorage = getTokensStorage();
  const sharedStorage = getSharedStorage();
  const { transformKey } = getFormatConfig();
  const clearPath = path.replace(/{|}/g, '');
  const clearPathArray = clearPath.split('.');
  const tokenInStorage = tokensStorage.get(clearPath);

  const match = extractVariables(path);
  if (match.length > 1) {
    return match.map((item) => checkTokenByPath(item)).join('.');
  }

  if (!tokenInStorage) {
    const tokenInSharedStorage = sharedStorage.get(clearPath);
    if (tokenInSharedStorage) {
      return tokenInSharedStorage;
    }
    return path;
  }

  const token = clearPathArray.map((key) => transformKey(key)).join('.');

  if (tokenInStorage.group) {
    return `$${tokenInStorage.group}.${token}`;
  }

  return `$${token}`;
}

function getStrictTokenValue(obj, key, refOnly = false) {
  const breakpointsStorage = getBreakpointsStorage();

  if (obj && typeof obj === 'object' && 'type' in obj) {
    if (obj.description === 'figma-only') {
      return null;
    }

    const currentKey = camelize(key);

    if (refOnly || VALID_PROPS[currentKey] || breakpointsStorage.has(currentKey)) {
      if (/{|}/g.test(obj.value)) {
        return checkTokenByPath(obj.value);
      }
      return obj.type === 'number' || obj.type === 'opacity' ? Number(obj.value) : obj.value;
    }

    return null;
  }

  if (obj && typeof obj === 'object') {
    const result = {};
    const orderList = breakpointsStorage.get('order');
    const isBreakpointObject = orderList && orderList.some((k) => Object.hasOwn(obj, k));

    if (isBreakpointObject) {
      return processBreakpointObject(obj, orderList, breakpointsStorage, refOnly);
    }

    for (const [key, value] of Object.entries(obj)) {
      const val = getStrictTokenValue(value, key, refOnly);
      if (val !== null) {
        const tokenizedKey = refOnly ? key : isNumeric(key) ? `$${key}` : camelize(key);

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

export function transformGroupComponentsSource(rawData, _sources, _variant) {
  return getStrictTokenValue(rawData, null, true);
}

export default transformGroupComponents;
