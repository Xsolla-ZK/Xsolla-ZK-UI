export declare const Sheet: import("react").ForwardRefExoticComponent<{
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
} & import("react").RefAttributes<import("react-native").View>> & {
    Header: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("./sheet.types").SheetSizes | undefined;
        blured?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Body: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("./sheet.types").SheetSizes | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Footer: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("./sheet.types").SheetSizes | undefined;
        blured?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
} & {
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
    } & import("react").RefAttributes<import("react-native").View>> & {
        Header: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
            size?: import("./sheet.types").SheetSizes | undefined;
            blured?: boolean | undefined;
        }, import("@tamagui/web").StaticConfigPublic>;
        Body: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
            size?: import("./sheet.types").SheetSizes | undefined;
        }, import("@tamagui/web").StaticConfigPublic>;
        Footer: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
            size?: import("./sheet.types").SheetSizes | undefined;
            blured?: boolean | undefined;
        }, import("@tamagui/web").StaticConfigPublic>;
    } & {
        Content: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
            size?: import("./sheet.types").SheetSizes | undefined;
            preset?: "fullscreen" | "popup" | "bottom-sheet" | undefined;
        }>, "native" | "animation" | "zIndex" | "modal" | "children" | "open" | "snapPoints" | "snapPointsMode" | "defaultOpen" | "onOpenChange" | "defaultPosition" | "onPositionChange" | "dismissOnOverlayPress" | "dismissOnSnapToBottom" | "forceRemoveScrollEnabled" | "animationConfig" | "unmountChildrenWhenHidden" | "handleDisableScroll" | "disableDrag" | "portalProps" | "moveOnKeyboardChange" | "containerComponent" | "__scopeSheet" | keyof {
            disableHideBottomOverflow?: boolean;
            adjustPaddingForOffscreenContent?: boolean;
        }> & Omit<import("./sheet.types").SheetProps, "position"> & {
            disableHideBottomOverflow?: boolean;
            adjustPaddingForOffscreenContent?: boolean;
        }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("./sheet.types").SheetProps, "position"> & {
            disableHideBottomOverflow?: boolean;
            adjustPaddingForOffscreenContent?: boolean;
        }, import("@tamagui/web").StackStyleBase, {
            size?: import("./sheet.types").SheetSizes | undefined;
            preset?: "fullscreen" | "popup" | "bottom-sheet" | undefined;
        }, import("@tamagui/web").StaticConfigPublic>;
        Overlay: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
            open?: boolean | undefined;
        }>, `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "open" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof import("@tamagui/web").StackStyleBase | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
            open?: boolean | undefined;
        }>>, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
            open?: boolean | undefined;
        }>>, import("@tamagui/web").StackStyleBase, {
            open?: boolean | undefined;
        }, import("@tamagui/web").StaticConfigPublic>;
        Handle: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
            open?: boolean | undefined;
        }>, `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "open" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof import("@tamagui/web").StackStyleBase | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
            open?: boolean | undefined;
        } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
            open?: boolean | undefined;
        }>>, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
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
    Content: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("./sheet.types").SheetSizes | undefined;
        preset?: "fullscreen" | "popup" | "bottom-sheet" | undefined;
    }>, "native" | "animation" | "zIndex" | "modal" | "children" | "open" | "snapPoints" | "snapPointsMode" | "defaultOpen" | "onOpenChange" | "defaultPosition" | "onPositionChange" | "dismissOnOverlayPress" | "dismissOnSnapToBottom" | "forceRemoveScrollEnabled" | "animationConfig" | "unmountChildrenWhenHidden" | "handleDisableScroll" | "disableDrag" | "portalProps" | "moveOnKeyboardChange" | "containerComponent" | "__scopeSheet" | keyof {
        disableHideBottomOverflow?: boolean;
        adjustPaddingForOffscreenContent?: boolean;
    }> & Omit<import("./sheet.types").SheetProps, "position"> & {
        disableHideBottomOverflow?: boolean;
        adjustPaddingForOffscreenContent?: boolean;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("./sheet.types").SheetProps, "position"> & {
        disableHideBottomOverflow?: boolean;
        adjustPaddingForOffscreenContent?: boolean;
    }, import("@tamagui/web").StackStyleBase, {
        size?: import("./sheet.types").SheetSizes | undefined;
        preset?: "fullscreen" | "popup" | "bottom-sheet" | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Overlay: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }>, `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "open" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof import("@tamagui/web").StackStyleBase | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }>>, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }>>, import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Handle: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }>, `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "open" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof import("@tamagui/web").StackStyleBase | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        open?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }>>, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
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
//# sourceMappingURL=sheet.d.ts.map