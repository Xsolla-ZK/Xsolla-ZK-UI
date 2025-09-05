import type { NavBarContextType, NavBarStateContextType } from './nav-bar.types';
export declare const NavBarContext: import("react").Context<NavBarContextType> & {
    context: import("react").Context<NavBarContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<NavBarContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => NavBarContextType;
} & Omit<{
    contextMediaProps: ("size" | "preset")[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<NavBarContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: ("size" | "preset")[];
};
export declare const NavBarStateContext: import("@tamagui/core").StyledContext<NavBarStateContextType>;
//# sourceMappingURL=nav-bar.context.d.ts.map