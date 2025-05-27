import { View } from 'react-native';
import type { SnapPointsMode } from './sheet.types';
export declare const SheetImplCustom: import("react").ForwardRefExoticComponent<{
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: import("react").Dispatch<import("react").SetStateAction<boolean>> | ((open: boolean) => void);
    position?: number;
    defaultPosition?: number;
    snapPoints?: Array<string | number>;
    snapPointsMode?: SnapPointsMode;
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
} & import("react").RefAttributes<View>>;
//# sourceMappingURL=sheet-impl-custom.d.ts.map