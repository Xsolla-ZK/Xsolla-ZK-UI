import { sharedConfig, themes, tokens } from './shared';
import layout from './tokens/platform/web/layout';
import media from './tokens/platform/web/media';
import type { GenericMedia } from './types/helpers';
import type { CreateTamaguiProps } from '@tamagui/core';

type FlattenObject<T> = T extends object
  ? {
      [K in keyof T as T[K] extends object
        ? `${string & K}.${keyof FlattenObject<T[K]> & string}`
        : K]: T[K] extends object ? FlattenObject<T[K]>[keyof FlattenObject<T[K]>] : T[K];
    }
  : T;

const flattenObject = <T extends Record<string, unknown>>(obj: T, prefix = '') =>
  Object.keys(obj).reduce((acc, key) => {
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(acc, flattenObject(obj[key] as Record<string, unknown>, prefixedKey));
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      acc[prefixedKey] = obj[key];
    }
    return acc;
  }, {} as FlattenObject<T>);

export const webConfig = {
  ...sharedConfig,
  themes,
  tokens: {
    ...tokens,
    layout: flattenObject(layout),
  },
  media: (Object.keys(media.breakpoint) as Array<keyof typeof media.breakpoint>).reduce(
    (acc, key) => {
      acc[key] = {
        minWidth: media.breakpoint[key],
      };
      return acc;
    },
    {} as GenericMedia<typeof media.breakpoint>,
  ),
} satisfies CreateTamaguiProps;
