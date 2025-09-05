import type { AccordionItemProps, AccordionProps, AccordionScopedProps } from './accordion.types';
import type { TamaguiElement } from '@tamagui/core';
export declare const Accordion: import("react").ForwardRefExoticComponent<AccordionScopedProps<AccordionProps> & import("react").RefAttributes<TamaguiElement>> & {
    Trigger: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").StackNonStyleProps & void, import("@tamagui/core").StackStyleBase, {}>, `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/core").StackStyleBase | keyof import("@tamagui/core").StackNonStyleProps | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> | "__scopeAccordion"> & Omit<import("@tamagui/core").StackNonStyleProps & void, keyof import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {}>> & {
        children?: ((props: {
            open: boolean;
        }) => import("react").ReactNode) | import("react").ReactNode;
    } & {
        __scopeAccordion?: string;
    }, TamaguiElement, import("@tamagui/core").StackNonStyleProps & void & Omit<import("@tamagui/core").StackNonStyleProps & void, keyof import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {}>> & {
        children?: ((props: {
            open: boolean;
        }) => import("react").ReactNode) | import("react").ReactNode;
    } & {
        __scopeAccordion?: string;
    }, import("@tamagui/core").StackStyleBase, {}, import("@tamagui/core").StaticConfigPublic>;
    Header: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & void, import("@tamagui/core").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
    Content: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").StackNonStyleProps & import("@tamagui/collapsible").CollapsibleContentExtraProps, import("@tamagui/core").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }>, "size" | `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/core").StackStyleBase | "custom" | "initial" | keyof import("@tamagui/core").StackNonStyleProps | "forceMount" | "onExitComplete" | "withBoard" | "exitBeforeEnter" | "presenceAffectsLayout" | "exitVariant" | "enterVariant" | "enterExitVariant" | "__scopeAccordion" | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & Omit<import("@tamagui/core").StackNonStyleProps & import("@tamagui/collapsible").CollapsibleContentExtraProps, "size" | keyof import("@tamagui/core").StackStyleBase | "withBoard"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }>> & {
        __scopeAccordion?: string;
    }, TamaguiElement, import("@tamagui/core").StackNonStyleProps & import("@tamagui/collapsible").CollapsibleContentExtraProps & Omit<import("@tamagui/core").StackNonStyleProps & import("@tamagui/collapsible").CollapsibleContentExtraProps, "size" | keyof import("@tamagui/core").StackStyleBase | "withBoard"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }>> & {
        __scopeAccordion?: string;
    }, import("@tamagui/core").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
    Item: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").TamaguiComponentPropsBaseBase & import("@tamagui/collapsible").CollapsibleProps & {
        __scopeCollapsible?: string;
    } & import("react").RefAttributes<TamaguiElement>, import("@tamagui/core").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }>, "__scopeAccordion" | keyof AccordionItemProps> & AccordionItemProps & {
        __scopeAccordion?: string;
    }, HTMLElement | import("react-native").View, import("@tamagui/core").TamaguiComponentPropsBaseBase & import("@tamagui/collapsible").CollapsibleProps & {
        __scopeCollapsible?: string;
    } & import("react").RefAttributes<TamaguiElement> & AccordionItemProps & {
        __scopeAccordion?: string;
    }, import("@tamagui/core").StackStyleBase, {
        size?: import("./accordion.types").AccordionSizes | undefined;
        withBoard?: boolean | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
    HeightAnimator: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {}>, `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/core").StackStyleBase | keyof import("@tamagui/core").StackNonStyleProps | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & import("@tamagui/core").StackNonStyleProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {}>>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("@tamagui/core").StackNonStyleProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {}>>, import("@tamagui/core").StackStyleBase, {}, {}>;
};
//# sourceMappingURL=accordion.d.ts.map