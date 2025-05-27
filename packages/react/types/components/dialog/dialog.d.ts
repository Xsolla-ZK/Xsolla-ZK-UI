import type { DialogCloseExtraProps, DialogPortalProps, DialogProps, DialogScopedProps } from './dialog.types';
import type { TamaguiElement } from '@tamagui/core';
import type { Scope } from '@tamagui/create-context';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
export declare const Dialog: import("react").ForwardRefExoticComponent<DialogProps & import("react").RefAttributes<{
    open: (val: boolean) => void;
}>> & {
    Header: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("..").SheetSizes | undefined;
        blured?: boolean | undefined;
    }>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & void, import("@tamagui/web").StackStyleBase, {
        size?: import("..").SheetSizes | undefined;
        blured?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Body: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("..").SheetSizes | undefined;
    }>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & void, import("@tamagui/web").StackStyleBase, {
        size?: import("..").SheetSizes | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Footer: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("..").SheetSizes | undefined;
        blured?: boolean | undefined;
    }>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & void, import("@tamagui/web").StackStyleBase, {
        size?: import("..").SheetSizes | undefined;
        blured?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Trigger: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {}>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & void, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
    Portal: (props: DialogScopedProps<DialogPortalProps>) => import("react/jsx-runtime").JSX.Element | null;
    Overlay: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & void, import("@tamagui/web").StackStyleBase, {
        open?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Content: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("./dialog.types").DialogSizes | undefined;
    }>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & void, import("@tamagui/web").StackStyleBase, {
        size?: import("./dialog.types").DialogSizes | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Title: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
        preset?: import("../..").TypographyPresets | undefined;
    }>, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps & void, import("@tamagui/web").TextStylePropsBase, {
        preset?: import("../..").TypographyPresets | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Description: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
        preset?: import("../..").TypographyPresets | undefined;
    }>, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps & void, import("@tamagui/web").TextStylePropsBase, {
        preset?: import("../..").TypographyPresets | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Close: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {}>, "displayWhenAdapted"> & DialogCloseExtraProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & DialogCloseExtraProps, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
    Sheet: import("react").ForwardRefExoticComponent<{
        open?: boolean;
        defaultOpen?: boolean;
        onOpenChange?: Dispatch<SetStateAction<boolean>> | ((open: boolean) => void);
        position?: number;
        defaultPosition?: number;
        snapPoints?: Array<string | number>;
        snapPointsMode?: import("..").SnapPointsMode;
        onPositionChange?: import("..").PositionChangeHandler;
        children?: ReactNode;
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
        __scopeSheet?: Scope;
    } & import("react").RefAttributes<import("react-native").View>> & {
        Header: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
            size?: import("..").SheetSizes | undefined;
            blured?: boolean | undefined;
        }, import("@tamagui/web").StaticConfigPublic>;
        Body: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
            size?: import("..").SheetSizes | undefined;
        }, import("@tamagui/web").StaticConfigPublic>;
        Footer: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
            size?: import("..").SheetSizes | undefined;
            blured?: boolean | undefined;
        }, import("@tamagui/web").StaticConfigPublic>;
    } & {
        Content: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
            size?: import("..").SheetSizes | undefined;
        }>, "native" | "animation" | "zIndex" | "modal" | "children" | "open" | "snapPoints" | "snapPointsMode" | "defaultOpen" | "onOpenChange" | "defaultPosition" | "onPositionChange" | "dismissOnOverlayPress" | "dismissOnSnapToBottom" | "forceRemoveScrollEnabled" | "animationConfig" | "unmountChildrenWhenHidden" | "handleDisableScroll" | "disableDrag" | "portalProps" | "moveOnKeyboardChange" | "containerComponent" | "__scopeSheet" | keyof {
            disableHideBottomOverflow?: boolean;
            adjustPaddingForOffscreenContent?: boolean;
        }> & Omit<import("..").SheetProps, "position"> & {
            disableHideBottomOverflow?: boolean;
            adjustPaddingForOffscreenContent?: boolean;
        }, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("..").SheetProps, "position"> & {
            disableHideBottomOverflow?: boolean;
            adjustPaddingForOffscreenContent?: boolean;
        }, import("@tamagui/web").StackStyleBase, {
            size?: import("..").SheetSizes | undefined;
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
        }>>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "open" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
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
    Adapt: ((props: import("@tamagui/adapt").AdaptProps) => import("react/jsx-runtime").JSX.Element) & {
        Contents: {
            ({ scope, ...rest }: {
                scope?: string;
            }): React.FunctionComponentElement<any>;
            shouldForwardSpace: boolean;
        };
    };
};
//# sourceMappingURL=dialog.d.ts.map