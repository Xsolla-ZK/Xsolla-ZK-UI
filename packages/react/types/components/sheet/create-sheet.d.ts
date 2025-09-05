import type { SheetFrame as SheetFrameType, SheetHandle as SheetHandleType, SheetOverlay as SheetOverlayType } from './sheet.styled';
import type { SheetProps } from './sheet.types';
import type { TamaguiComponent, TamaguiElement } from '@tamagui/core';
import type { View } from 'react-native';
type ExtraFrameProps = {
    /**
     * By default the sheet adds a view below its bottom that extends down another 50%,
     * this is useful if your Sheet has a spring animation that bounces "past" the top when
     * opening, preventing it from showing the content underneath.
     */
    disableHideBottomOverflow?: boolean;
    /**
     * Adds padding accounting for the currently offscreen content, so if you put a flex element inside
     * the sheet, it will always flex to the height of the visible amount of the sheet. If this is not
     * turned on, the inner content is always set to the max height of the sheet.
     */
    adjustPaddingForOffscreenContent?: boolean;
};
type CreateSheetProps = {
    Handle: typeof SheetHandleType;
    Content: typeof SheetFrameType;
    Overlay: typeof SheetOverlayType;
};
export declare function createSheet<E extends Record<string, TamaguiComponent> = Record<string, TamaguiComponent>>({ Handle, Content, Overlay }: CreateSheetProps, extra?: E): import("react").ForwardRefExoticComponent<{
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: import("react").Dispatch<import("react").SetStateAction<boolean>> | ((open: boolean) => void);
    position?: number;
    defaultPosition?: number;
    snapPoints?: Array<string | number>;
    snapPointsMode?: import("./sheet.types").SnapPointsMode;
    onPositionChange?: import("./sheet.types").PositionChangeHandler;
    children?: import("react").ReactNode;
    dismissOnOverlayPress?: boolean;
    dismissOnSnapToBottom?: boolean;
    forceRemoveScrollEnabled?: boolean;
    animationConfig?: import("@tamagui/core").AnimatedNumberStrategy;
    preferAdaptParentOpenState?: boolean;
    unmountChildrenWhenHidden?: boolean;
    native?: Array<"ios"> | boolean;
    animation?: import("@tamagui/core").AnimationProp;
    handleDisableScroll?: boolean;
    disableDrag?: boolean;
    modal?: boolean;
    zIndex?: number;
    portalProps?: import("@tamagui/portal").PortalProps;
    moveOnKeyboardChange?: boolean;
    containerComponent?: import("react").ComponentType;
} & {
    __scopeSheet?: import("@tamagui/create-context").Scope;
} & import("react").RefAttributes<View>> & E & {
    Controlled: import("react").ForwardRefExoticComponent<{
        open?: boolean;
        defaultOpen?: boolean;
        onOpenChange?: import("react").Dispatch<import("react").SetStateAction<boolean>> | ((open: boolean) => void);
        position?: number;
        defaultPosition?: number;
        snapPoints?: Array<string | number>;
        snapPointsMode?: import("./sheet.types").SnapPointsMode;
        onPositionChange?: import("./sheet.types").PositionChangeHandler;
        children?: import("react").ReactNode;
        dismissOnOverlayPress?: boolean;
        dismissOnSnapToBottom?: boolean;
        forceRemoveScrollEnabled?: boolean;
        animationConfig?: import("@tamagui/core").AnimatedNumberStrategy;
        preferAdaptParentOpenState?: boolean;
        unmountChildrenWhenHidden?: boolean;
        native?: Array<"ios"> | boolean;
        animation?: import("@tamagui/core").AnimationProp;
        handleDisableScroll?: boolean;
        disableDrag?: boolean;
        modal?: boolean;
        zIndex?: number;
        portalProps?: import("@tamagui/portal").PortalProps;
        moveOnKeyboardChange?: boolean;
        containerComponent?: import("react").ComponentType;
    } & {
        __scopeSheet?: import("@tamagui/create-context").Scope;
    } & import("react").RefAttributes<View>> & E & {
        Content: TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
            size?: import("./sheet.types").SheetSizes | undefined;
            preset?: "fullscreen" | "popup" | "bottom-sheet" | undefined;
        }>, "native" | "zIndex" | "animation" | "children" | "modal" | "open" | "snapPoints" | "snapPointsMode" | "defaultOpen" | "onOpenChange" | "defaultPosition" | "onPositionChange" | "dismissOnOverlayPress" | "dismissOnSnapToBottom" | "forceRemoveScrollEnabled" | "animationConfig" | "preferAdaptParentOpenState" | "unmountChildrenWhenHidden" | "handleDisableScroll" | "disableDrag" | "portalProps" | "moveOnKeyboardChange" | "containerComponent" | "__scopeSheet" | keyof ExtraFrameProps> & Omit<SheetProps, "position"> & ExtraFrameProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<SheetProps, "position"> & ExtraFrameProps, import("@tamagui/core").StackStyleBase, {
            size?: import("./sheet.types").SheetSizes | undefined;
            preset?: "fullscreen" | "popup" | "bottom-sheet" | undefined;
        }, import("@tamagui/core").StaticConfigPublic>;
        Overlay: TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
            open?: boolean | undefined;
        }>, `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/core").StackStyleBase | "open" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStyleBase | "open"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
            open?: boolean | undefined;
        }>>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStyleBase | "open"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
            open?: boolean | undefined;
        }>>, import("@tamagui/core").StackStyleBase, {
            open?: boolean | undefined;
        }, import("@tamagui/core").StaticConfigPublic>;
        Handle: TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
            open?: boolean | undefined;
        }>, `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/core").StackStyleBase | "open" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStyleBase | "open"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
            open?: boolean | undefined;
        }>>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStyleBase | "open"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
            open?: boolean | undefined;
        }>>, import("@tamagui/core").StackStyleBase, {
            open?: boolean | undefined;
        }, import("@tamagui/core").StaticConfigPublic>;
        ScrollView: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native").ScrollViewProps, keyof import("@tamagui/core").StackStyleBase | "contentContainerStyle" | "fullscreen"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase & {
            readonly contentContainerStyle?: Partial<import("@tamagui/core").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/core").StackStyleBase, {}>> | undefined;
        }> & {
            fullscreen?: boolean | undefined;
        } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase & {
            readonly contentContainerStyle?: Partial<import("@tamagui/core").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/core").StackStyleBase, {}>> | undefined;
        }>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase & {
            readonly contentContainerStyle?: Partial<import("@tamagui/core").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/core").StackStyleBase, {}>> | undefined;
        }> & {
            fullscreen?: boolean | undefined;
        } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase & {
            readonly contentContainerStyle?: Partial<import("@tamagui/core").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/core").StackStyleBase, {}>> | undefined;
        }>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase & {
            readonly contentContainerStyle?: Partial<import("@tamagui/core").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/core").StackStyleBase, {}>> | undefined;
        }, {
            fullscreen?: boolean | undefined;
        }>> & import("react").RefAttributes<import("react-native").ScrollView>>;
    };
    Content: TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
        size?: import("./sheet.types").SheetSizes | undefined;
        preset?: "fullscreen" | "popup" | "bottom-sheet" | undefined;
    }>, "native" | "zIndex" | "animation" | "children" | "modal" | "open" | "snapPoints" | "snapPointsMode" | "defaultOpen" | "onOpenChange" | "defaultPosition" | "onPositionChange" | "dismissOnOverlayPress" | "dismissOnSnapToBottom" | "forceRemoveScrollEnabled" | "animationConfig" | "preferAdaptParentOpenState" | "unmountChildrenWhenHidden" | "handleDisableScroll" | "disableDrag" | "portalProps" | "moveOnKeyboardChange" | "containerComponent" | "__scopeSheet" | keyof ExtraFrameProps> & Omit<SheetProps, "position"> & ExtraFrameProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<SheetProps, "position"> & ExtraFrameProps, import("@tamagui/core").StackStyleBase, {
        size?: import("./sheet.types").SheetSizes | undefined;
        preset?: "fullscreen" | "popup" | "bottom-sheet" | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
    Overlay: TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
        open?: boolean | undefined;
    }>, `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/core").StackStyleBase | "open" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStyleBase | "open"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
        open?: boolean | undefined;
    }>>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStyleBase | "open"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
        open?: boolean | undefined;
    }>>, import("@tamagui/core").StackStyleBase, {
        open?: boolean | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
    Handle: TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
        open?: boolean | undefined;
    }>, `$${string}` | `$${number}` | import("@tamagui/core").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/core").StackStyleBase | "open" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStyleBase | "open"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
        open?: boolean | undefined;
    }>>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStyleBase | "open"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
        open?: boolean | undefined;
    }>>, import("@tamagui/core").StackStyleBase, {
        open?: boolean | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
    ScrollView: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native").ScrollViewProps, keyof import("@tamagui/core").StackStyleBase | "contentContainerStyle" | "fullscreen"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase & {
        readonly contentContainerStyle?: Partial<import("@tamagui/core").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/core").StackStyleBase, {}>> | undefined;
    }> & {
        fullscreen?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase & {
        readonly contentContainerStyle?: Partial<import("@tamagui/core").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/core").StackStyleBase, {}>> | undefined;
    }>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase & {
        readonly contentContainerStyle?: Partial<import("@tamagui/core").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/core").StackStyleBase, {}>> | undefined;
    }> & {
        fullscreen?: boolean | undefined;
    } & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase & {
        readonly contentContainerStyle?: Partial<import("@tamagui/core").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/core").StackStyleBase, {}>> | undefined;
    }>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase & {
        readonly contentContainerStyle?: Partial<import("@tamagui/core").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/core").StackStyleBase, {}>> | undefined;
    }, {
        fullscreen?: boolean | undefined;
    }>> & import("react").RefAttributes<import("react-native").ScrollView>>;
};
export {};
//# sourceMappingURL=create-sheet.d.ts.map