export function createFormat(format) {
  return {
    transformKey: (key) => key,
    transformGroupKey: (key) => key,
    transformMap: {},
    flatten: false,
    extension: 'js',
    separator: '.',
    ...format,
  };
}

export const groupMap = {
  common: 'tokens',
  theme: 'themes',
};

export const keysMap = {
  spacing: 'space',
  apple: 'ios',
};

export function transformKeyFromMap(key) {
  return keysMap[key] ?? key;
}

export function transformGroupKey(key) {
  return groupMap[key] ?? key;
}
