import type { ValidAllPropsWithExtra } from './valid-props';
import type { ExtractValues, MediaUnion, MediaValue, Prettify, ReturnTypeConfig } from '../types';
import type { ComponentsConfig } from './components-config';
import type { WithThemeShorthandsPseudosMedia } from '@tamagui/core';
type Result = WithThemeShorthandsPseudosMedia<ValidAllPropsWithExtra>;
type CallbackMapProps<T, K extends keyof T> = Prettify<ExtractValues<Omit<T, K>>>;
type CallbackMap<T> = {
    [K in keyof T]?: (value: T[K] extends MediaValue<infer U> ? U : T[K], extras: {
        props: CallbackMapProps<T, K>;
        config: ReturnTypeConfig<ComponentsConfig>;
        breakpoint: MediaUnion;
    }) => Record<string, unknown>;
};
type ProcessCallback<T> = (values: {
    [K in keyof T]: T[K] extends MediaValue<infer U> ? U : T[K];
}, config: ReturnTypeConfig<ComponentsConfig>) => Record<string, unknown>;
export declare function processMediaValues<T extends Record<string, MediaValue<string | number | boolean>>>(input: T, processCallback: ProcessCallback<T>): Result;
export declare function processMediaValues<T extends Record<string, MediaValue<string | number | boolean>>>(input: T, processCallback: CallbackMap<T>): Result;
export {};
//# sourceMappingURL=process-media-values.d.ts.map