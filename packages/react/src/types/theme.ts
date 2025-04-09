import type { Themes } from '@tamagui/core';

export type DefaultTone = 'brand';

export type ExtractSubthemeKeys<
  T,
  Namespace extends string,
> = T extends `${infer _Base}_${infer SubTheme}_${Namespace}` ? SubTheme : never;

export type GetComponentTone<T extends string> = DefaultTone | ExtractSubthemeKeys<keyof Themes, T>;
