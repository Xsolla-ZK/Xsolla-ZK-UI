import type { ChipContextType, ChipsContextType } from './chips.types';
export declare const ChipsContext: import("react").Context<ChipsContextType> & {
    context: import("react").Context<ChipsContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<ChipsContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => ChipsContextType;
} & Omit<{
    contextMediaProps: ("size" | "variant")[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<ChipsContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: ("size" | "variant")[];
};
export declare const ChipContext: import("react").Context<ChipContextType> & {
    context: import("react").Context<ChipContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<ChipContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => ChipContextType;
} & Omit<{
    contextMediaProps: ("size" | "variant")[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<ChipContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: ("size" | "variant")[];
};
//# sourceMappingURL=chips.context.d.ts.map