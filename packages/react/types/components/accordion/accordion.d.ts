import type { AccordionItemProps, AccordionProps, AccordionScopedProps } from './accordion.types';
import type { TamaguiElement } from '@tamagui/core';
export declare const Accordion: import("react").ForwardRefExoticComponent<AccordionScopedProps<AccordionProps> & import("react").RefAttributes<TamaguiElement>> & {
    Trigger: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/web").StackNonStyleProps & void, import("@tamagui/web").StackStyleBase, {}>, `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").StackStyleBase | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> | "__scopeAccordion"> & Omit<import("@tamagui/web").StackNonStyleProps & void, keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & {
        children?: ((props: {
            open: boolean;
        }) => import("react").ReactNode) | import("react").ReactNode;
    } & {
        __scopeAccordion?: string | undefined;
    }, TamaguiElement, import("@tamagui/web").StackNonStyleProps & void & Omit<import("@tamagui/web").StackNonStyleProps & void, keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & {
        children?: ((props: {
            open: boolean;
        }) => import("react").ReactNode) | import("react").ReactNode;
    } & {
        __scopeAccordion?: string | undefined;
    }, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
    Header: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & void, import("@tamagui/web").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Content: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/web").StackNonStyleProps & import("@tamagui/collapsible").CollapsibleContentExtraProps, import("@tamagui/web").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }>, "size" | `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").StackStyleBase | "withBoard" | keyof import("@tamagui/collapsible").CollapsibleContentExtraProps | "__scopeAccordion" | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>>> & Omit<import("@tamagui/web").StackNonStyleProps & import("@tamagui/collapsible").CollapsibleContentExtraProps, "size" | keyof import("@tamagui/web").StackStyleBase | "withBoard"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }>> & {
        __scopeAccordion?: string | undefined;
    }, TamaguiElement, import("@tamagui/web").StackNonStyleProps & import("@tamagui/collapsible").CollapsibleContentExtraProps & Omit<import("@tamagui/web").StackNonStyleProps & import("@tamagui/collapsible").CollapsibleContentExtraProps, "size" | keyof import("@tamagui/web").StackStyleBase | "withBoard"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }>> & {
        __scopeAccordion?: string | undefined;
    }, import("@tamagui/web").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Item: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("@tamagui/collapsible").CollapsibleProps & {
        __scopeCollapsible?: string;
    } & import("react").RefAttributes<TamaguiElement>, import("@tamagui/web").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }>, "__scopeAccordion" | keyof AccordionItemProps> & AccordionItemProps & {
        __scopeAccordion?: string | undefined;
    }, HTMLElement | import("react-native").View, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("@tamagui/collapsible").CollapsibleProps & {
        __scopeCollapsible?: string;
    } & import("react").RefAttributes<TamaguiElement> & AccordionItemProps & {
        __scopeAccordion?: string | undefined;
    }, import("@tamagui/web").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    HeightAnimator: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {}>, `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").StackNonStyleProps | keyof import("@tamagui/web").StackStyleBase | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>>> & import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("@tamagui/web").StackNonStyleProps & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>>, import("@tamagui/web").StackStyleBase, {}, {}>;
};
//# sourceMappingURL=accordion.d.ts.map