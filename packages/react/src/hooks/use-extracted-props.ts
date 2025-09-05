import { getMediaKeys } from '@xsolla-zk/ui-utils';
import { useMemo } from 'react';
import type { Prettify } from '../types';

export function useExtractedProps<Props extends Record<string, unknown>, Keys extends keyof Props>(
  props: Props,
  filteredKeys: Keys[],
) {
  return useMemo(() => {
    const { mediaKeys } = getMediaKeys();
    const keysSet = new Set(filteredKeys);
    const result = {} as Prettify<Pick<Props, Keys>>;

    for (const key of filteredKeys) {
      if (key in props) {
        result[key] = props[key];
      }
    }

    for (const mediaKey of mediaKeys) {
      const mediaKeyWithPrefix = `$${mediaKey}`;

      if (mediaKeyWithPrefix in props && props[mediaKeyWithPrefix]) {
        const mediaValue = props[mediaKeyWithPrefix] as Record<string, unknown>;
        const filteredMediaValue = {} as Record<string, unknown>;

        for (const key in mediaValue) {
          if (keysSet.has(key as Keys)) {
            filteredMediaValue[key] = mediaValue[key];
          }
        }

        if (Object.keys(filteredMediaValue).length > 0) {
          result[mediaKeyWithPrefix as Keys] = filteredMediaValue as Props[Keys];
        }
      }
    }

    return result;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
