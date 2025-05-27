import type { IsLiteralString } from './helpers';
import type { Themes } from '@tamagui/core';
export type DefaultTone = 'brand';
export type ExtractSubthemeKeys<T, Component extends string> = (T extends `${infer _Theme}_${infer Modifier}_${Component}` ? IsLiteralString<T> extends true ? Modifier : never : never) | (T extends `${infer _Theme}_${Component}` ? DefaultTone : never);
export type GetComponentTone<T extends string> = DefaultTone | ExtractSubthemeKeys<keyof Themes, T> | (string & {});
//# sourceMappingURL=theme.d.ts.map