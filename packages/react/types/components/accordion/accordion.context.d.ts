import type { AccordionImplContextValue, AccordionItemContextValue, AccordionValueContextValue } from './accordion.types';
export declare const AccordionImplContext: import("react").Context<AccordionImplContextValue> & {
    context: import("react").Context<AccordionImplContextValue>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<AccordionImplContextValue> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => AccordionImplContextValue;
} & Omit<{
    contextMediaProps: ("size" | "withBoard")[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<AccordionImplContextValue>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: ("size" | "withBoard")[];
};
export declare const AccordionValueContext: import("@tamagui/core").StyledContext<AccordionValueContextValue>;
export declare const AccordionCollapsibleContext: import("@tamagui/core").StyledContext<Record<string, any>>;
export declare const AccordionItemContext: import("@tamagui/core").StyledContext<AccordionItemContextValue>;
//# sourceMappingURL=accordion.context.d.ts.map