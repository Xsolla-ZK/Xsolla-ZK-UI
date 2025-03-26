/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getMedia, type MediaPropKeys, type WithThemeShorthandsPseudosMedia } from '@tamagui/core';
import { propsMap } from './valid-props';
import type { ValidBaseProps, ValidExtraKeys, ValidProps } from './valid-props';
import type { TypographyPresets } from '../types/typography';

type Result = WithThemeShorthandsPseudosMedia<ValidBaseProps>;

type GetMappedPropsResult = {
  flat: Result;
  media: Result;
};

type TemplateMediaUnion = MediaPropKeys | 'base';

type MappedMediaProps<T> = {
  [K in TemplateMediaUnion]?: T;
};

type GetMappedProps<T extends ValidProps> = {
  [K in keyof T]?: T[K] | MappedMediaProps<T[K]>;
};

function processNested<T extends ValidProps[keyof ValidProps]>(
  originalProp: string,
  nestedValue: MappedMediaProps<T>,
  result: GetMappedPropsResult,
) {
  const media = getMedia();

  for (const bp in nestedValue) {
    if (bp === 'base') {
      processScalar(originalProp, nestedValue[bp as keyof T], result.flat);
    }
  }

  for (const bp in media) {
    const bpKey = `$${bp}`;
    if (nestedValue[bpKey as TemplateMediaUnion]) {
      // @ts-ignore
      result.media[bpKey] ??= {} as Result;
      // @ts-ignore
      processScalar(originalProp, nestedValue[bpKey as keyof T], result.media[bpKey]);
    }
  }

  return result;
}

function processScalar(key: string, value: ValidProps[keyof ValidProps], result: Result) {
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

export function getMappedProps<T extends ValidProps>(obj: GetMappedProps<T>) {
  const result = {
    flat: {},
    media: {},
  } as GetMappedPropsResult;

  for (const [key, value] of Object.entries(obj)) {
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      processNested(key, value as MappedMediaProps<ValidProps[keyof ValidProps]>, result);
    } else {
      processScalar(key, value as ValidProps[keyof ValidProps], result.flat);
    }
  }

  return {
    ...result.flat,
    ...result.media,
  } as Result;
}
