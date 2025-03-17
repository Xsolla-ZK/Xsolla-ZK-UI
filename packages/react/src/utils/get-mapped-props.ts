/* eslint-disable @typescript-eslint/ban-ts-comment */
import { propsMap } from './valid-props';
import type { ValidBaseProps, ValidExtraKeys, ValidProps } from './valid-props';
import type { TypographyPresets } from '../types/typography';

export function getMappedProps<T extends ValidProps>(obj: T) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const mappedKey = propsMap[key as ValidExtraKeys];
    if (mappedKey) {
      if (Array.isArray(mappedKey)) {
        mappedKey.forEach((prop) => {
          // @ts-ignore
          acc[prop] = value;
        });
      } else if (typeof mappedKey === 'function') {
        if (key === 'typography') {
          const extractedValues = mappedKey(value as TypographyPresets);
          Object.assign(acc, extractedValues);
        }
      } else {
        // @ts-ignore
        acc[mappedKey] = value;
      }
    } else {
      // @ts-ignore
      acc[key] = value;
    }

    return acc;
  }, {} as ValidBaseProps);
}
