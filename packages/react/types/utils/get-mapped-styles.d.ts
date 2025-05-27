import { type MediaPropKeys, type WithThemeShorthandsPseudosMedia } from '@tamagui/core';
import type { ValidBaseProps, ValidProps } from './valid-props';
type Result = WithThemeShorthandsPseudosMedia<ValidBaseProps>;
type TemplateMediaUnion = MediaPropKeys | 'base';
type MappedMediaStyles<T> = {
    [K in TemplateMediaUnion]?: T;
};
type GetMappedStyles<T extends ValidProps> = {
    [K in keyof T]?: T[K] | MappedMediaStyles<T[K]>;
};
export declare function getMappedStyles<T extends ValidProps>(obj: GetMappedStyles<T>): Result;
export {};
//# sourceMappingURL=get-mapped-styles.d.ts.map