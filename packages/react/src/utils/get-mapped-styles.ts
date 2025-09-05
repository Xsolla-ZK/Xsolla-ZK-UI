/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getMedia } from '@tamagui/core';
import { isPlainObject } from '@xsolla-zk/ui-utils';
import { propsMap } from './valid-props';
import type { MediaUnion, ValidStylesReturn } from '../types';
import type { ValidExtraKeys, ValidPropsWithExtra } from './valid-props';
import type { TypographyPresets } from '../types/typography';

type GetMappedStylesResult = {
  flat: ValidStylesReturn;
  media: Record<string, ValidStylesReturn>;
};

type MappedMediaStyles<T> = {
  [K in MediaUnion]?: T;
};

type GetMappedStyles<T extends ValidPropsWithExtra> = {
  [K in keyof T]?: T[K] | MappedMediaStyles<T[K]>;
};

function processNested<T extends ValidPropsWithExtra[keyof ValidPropsWithExtra]>(
  originalProp: string,
  nestedValue: MappedMediaStyles<T>,
  result: GetMappedStylesResult,
) {
  const media = getMedia();

  for (const bp in nestedValue) {
    if (bp === 'base') {
      processScalar(originalProp, nestedValue[bp as keyof T], result.flat);
    }
  }

  for (const bp in media) {
    const bpKey = `$${bp}`;
    if (nestedValue[bpKey as MediaUnion]) {
      // @ts-ignore
      result.media[bpKey] ??= {} as ValidStylesReturn;
      // @ts-ignore
      processScalar(originalProp, nestedValue[bpKey as keyof T], result.media[bpKey]);
    }
  }

  return result;
}

function processScalar(
  key: string,
  value: ValidPropsWithExtra[keyof ValidPropsWithExtra],
  result: ValidStylesReturn,
) {
  const mappedKey = propsMap[key as ValidExtraKeys];
  if (mappedKey) {
    if (Array.isArray(mappedKey)) {
      mappedKey.forEach((prop) => {
        Object.assign(result, { [prop]: value });
      });
    } else if (typeof mappedKey === 'function') {
      if (key === 'typography') {
        Object.assign(result, mappedKey(value as TypographyPresets));
      }
    } else {
      Object.assign(result, { [mappedKey]: value });
    }
  } else {
    Object.assign(result, { [key]: value });
  }

  return result;
}

export function getMappedStyles<T extends ValidPropsWithExtra>(obj: GetMappedStyles<T>) {
  const result = {
    flat: {},
    media: {},
  } as GetMappedStylesResult;

  for (const [key, value] of Object.entries(obj)) {
    if (isPlainObject(value)) {
      processNested(
        key,
        value as MappedMediaStyles<ValidPropsWithExtra[keyof ValidPropsWithExtra]>,
        result,
      );
    } else {
      processScalar(key, value as ValidPropsWithExtra[keyof ValidPropsWithExtra], result.flat);
    }
  }

  return {
    ...result.flat,
    ...result.media,
  } as ValidStylesReturn;
}
