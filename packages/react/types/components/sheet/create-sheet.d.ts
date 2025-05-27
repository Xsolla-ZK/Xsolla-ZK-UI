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
    animationConfig?: import("@tamagui/web").AnimatedNumberStrategy;
    unmountChildrenWhenHidden?: boolean;
    native?: Array<"ios"> | boolean;
    animation?: import("@tamagui/web").AnimationProp;
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
        animationConfig?: import("@tamagui/web").AnimatedNumberStrategy;
        unmountChildrenWhenHidden?: boolean;
        native?: Array<"ios"> | boolean;
        animation?: import("@tamagui/web").AnimationProp;
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
        Content: TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
            size?: import("./sheet.types").SheetSizes | undefined;
        }>, "native" | "animation" | "zIndex" | "modal" | "children" | "open" | "snapPoints" | "snapPointsMode" | "defaultOpen" | "onOpenChange" | "defaultPosition" | "onPositionChange" | "dismissOnOverlayPress" | "dismissOnSnapToBottom" | "forceRemoveScrollEnabled" | "animationConfig" | "unmountChildrenWhenHidden" | "handleDisableScroll" | "disableDrag" | "portalProps" | "moveOnKeyboardChange" | "containerComponent" | "__scopeSheet" | keyof ExtraFrameProps> & Omit<SheetProps, "position"> & ExtraFrameProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<SheetProps, "position"> & ExtraFrameProps, import("@tamagui/web").StackStyleBase, {
            size?: import("./sheet.types").SheetSizes | undefined;
        }, import("@tamagui/web").StaticConfigPublic>;
        Overlay: TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
            open?: boolean | undefined;
        }>, `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "open" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof import("@tamagui/web").StackStyleBase | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
            open?: boolean | undefined;
        }>>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
            open?: boolean | undefined;
        }>>, import("@tamagui/web").StackStyleBase, {
            open?: boolean | undefined;
        }, import("@tamagui/web").StaticConfigPublic>;
        Handle: TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
            open?: boolean | undefined;
        }>, `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "open" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof import("@tamagui/web").StackStyleBase | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
            open?: boolean | undefined;
        }>>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
            open?: boolean | undefined;
        }>>, import("@tamagui/web").StackStyleBase, {
            open?: boolean | undefined;
        }, import("@tamagui/web").StaticConfigPublic>;
        ScrollView: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").ScrollViewProps, keyof import("@tamagui/web").StackStyleBase | "contentContainerStyle" | "fullscreen"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase & {
            readonly contentContainerStyle?: Partial<import("@tamagui/web").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/web").StackStyleBase, {}>> | undefined;
        }> & {
            fullscreen?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase & {
            readonly contentContainerStyle?: Partial<import("@tamagui/web").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/web").StackStyleBase, {}>> | undefined;
        }>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase & {
            readonly contentContainerStyle?: Partial<import("@tamagui/web").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/web").StackStyleBase, {}>> | undefined;
        }> & {
            fullscreen?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase & {
            readonly contentContainerStyle?: Partial<import("@tamagui/web").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/web").StackStyleBase, {}>> | undefined;
        }>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase & {
            readonly contentContainerStyle?: Partial<import("@tamagui/web").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/web").StackStyleBase, {}>> | undefined;
        }, {
            fullscreen?: boolean | undefined;
        }>> & import("react").RefAttributes<import("react-native").ScrollView>>;
    };
    Content: TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("./sheet.types").SheetSizes | undefined;
    }>, "native" | "animation" | "zIndex" | "modal" | "children" | "open" | "snapPoints" | "snapPointsMode" | "defaultOpen" | "onOpenChange" | "defaultPosition" | "onPositionChange" | "dismissOnOverlayPress" | "dismissOnSnapToBottom" | "forceRemoveScrollEnabled" | "animationConfig" | "unmountChildrenWhenHidden" | "handleDisableScroll" | "disableDrag" | "portalProps" | "moveOnKeyboardChange" | "containerComponent" | "__scopeSheet" | keyof ExtraFrameProps> & Omit<SheetProps, "position"> & ExtraFrameProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<SheetProps, "position"> & ExtraFrameProps, import("@tamagui/web").StackStyleBase, {
        size?: import("./sheet.types").SheetSizes | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Overlay: TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }>, `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "open" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof import("@tamagui/web").StackStyleBase | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }>>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }>>, import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Handle: TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }>, `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "open" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof import("@tamagui/web").StackStyleBase | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }>>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }>>, import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    ScrollView: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").ScrollViewProps, keyof import("@tamagui/web").StackStyleBase | "contentContainerStyle" | "fullscreen"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase & {
        readonly contentContainerStyle?: Partial<import("@tamagui/web").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/web").StackStyleBase, {}>> | undefined;
    }> & {
        fullscreen?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase & {
        readonly contentContainerStyle?: Partial<import("@tamagui/web").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/web").StackStyleBase, {}>> | undefined;
    }>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase & {
        readonly contentContainerStyle?: Partial<import("@tamagui/web").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/web").StackStyleBase, {}>> | undefined;
    }> & {
        fullscreen?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase & {
        readonly contentContainerStyle?: Partial<import("@tamagui/web").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/web").StackStyleBase, {}>> | undefined;
    }>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase & {
        readonly contentContainerStyle?: Partial<import("@tamagui/web").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/web").StackStyleBase, {}>> | undefined;
    }, {
        fullscreen?: boolean | undefined;
    }>> & import("react").RefAttributes<import("react-native").ScrollView>>;
};
export {};
//# sourceMappingURL=create-sheet.d.ts.map