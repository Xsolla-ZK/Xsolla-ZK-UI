import type { ReactNode } from 'react';
type ProviderProps<T, P> = {
    componentProps?: P;
    children?: ReactNode;
    scope?: string;
} & Partial<T>;
export declare function createStyledMediaContext<T extends Record<string, unknown>, K extends Array<keyof T> = Array<keyof T>>(defaultValues: T, keyPropsArr: K, namespace?: string): import("react").Context<T> & {
    context: import("react").Context<T>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<T> & {
        children?: ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => T;
} & Omit<{
    contextMediaProps: K;
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: ProviderProps<T, P>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: K;
};
export {};
//# sourceMappingURL=create-styled-media-context.d.ts.map