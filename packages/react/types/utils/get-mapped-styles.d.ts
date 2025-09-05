import type { MediaUnion, ValidStylesReturn } from '../types';
import type { ValidPropsWithExtra } from './valid-props';
type MappedMediaStyles<T> = {
    [K in MediaUnion]?: T;
};
type GetMappedStyles<T extends ValidPropsWithExtra> = {
    [K in keyof T]?: T[K] | MappedMediaStyles<T[K]>;
};
export declare function getMappedStyles<T extends ValidPropsWithExtra>(obj: GetMappedStyles<T>): ValidStylesReturn;
export {};
//# sourceMappingURL=get-mapped-styles.d.ts.map