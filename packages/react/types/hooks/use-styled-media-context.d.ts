import type { StyledContext, WithMediaProps } from '@tamagui/core';
type ContextMediaProps<T> = T extends StyledContext<infer SC> & {
    __contextMediaProps: Array<infer Keys>;
} ? {
    [K in Extract<Keys, keyof SC>]: SC[K];
} : never;
type ContextOtherProps<T> = T extends StyledContext<infer SC> & {
    __contextMediaProps: Array<infer Keys>;
} ? {
    [K in Exclude<keyof SC, Keys>]: SC[K];
} : never;
type ResultMediaProps<T extends object> = T & WithMediaProps<T>;
export declare function useStyledMediaContext<T extends StyledContext & {
    __contextMediaProps: string[];
}>(context: T, scope?: string): {
    mediaContext: ResultMediaProps<ContextMediaProps<T>>;
} & ContextOtherProps<T>;
export {};
//# sourceMappingURL=use-styled-media-context.d.ts.map