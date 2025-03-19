import { getFormatConfig } from '../utils/config.mjs';
import { camelize, isNumeric, withoutEmpty } from '../utils/helpers.mjs';
import { getTokensStorage } from '../utils/tokens-storage.mjs';

const validProps = {
  borderRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  width: true,
  height: true,
  minWidth: true,
  minHeight: true,
  maxWidth: true,
  maxHeight: true,
  gap: true,
  columnGap: true,
  rowGap: true,
  margin: true,
  marginBottom: true,
  marginHorizontal: true,
  marginLeft: true,
  marginRight: true,
  marginTop: true,
  marginVertical: true,
  padding: true,
  paddingBottom: true,
  paddingLeft: true,
  paddingRight: true,
  paddingTop: true,
  paddingHorizontal: true,
  paddingVertical: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderTopWidth: true,
  borderWidth: true,
  size: true,
  minSize: true,
  maxSize: true,
  typography: true,
};

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
  if (obj && typeof obj === 'object' && 'type' in obj) {
    const currentKey = camelize(key);
    if (!validProps[currentKey]) {
      return null;
    }
    if (/{|}/g.test(obj.value)) {
      return checkTokenByPath(obj.value);
    }
    return obj.value;
  }

  if (obj && typeof obj === 'object') {
    const result = {};
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
