import type { SheetContextValue, SheetControllerContextValue } from './sheet.types';
export declare const createSheetContext: <ContextValueType extends object | null>(rootComponentName: string, defaultContext?: ContextValueType) => readonly [(props: ContextValueType & {
    scope: import("@tamagui/create-context").Scope<ContextValueType>;
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element, (consumerName: string, scope: import("@tamagui/create-context").Scope<ContextValueType | undefined>, options?: {
    warn?: boolean;
    fallback?: Partial<ContextValueType>;
}) => ContextValueType], createSheetScope: import("@tamagui/create-context").CreateScope;
export declare const SheetProvider: (props: {
    screenSize: number;
    maxSnapPoint: string | number;
    removeScrollEnabled: boolean | undefined;
    scrollBridge: import("./sheet.types").ScrollBridge;
    modal: boolean;
    open: boolean;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    hidden: boolean;
    contentRef: import("react").RefObject<import("react-native").View | null>;
    handleRef: import("react").RefObject<import("@tamagui/web").TamaguiElement | null>;
    frameSize: number;
    setFrameSize: import("react").Dispatch<import("react").SetStateAction<number>>;
    dismissOnOverlayPress: boolean;
    dismissOnSnapToBottom: boolean;
    onOverlayComponent: ((comp: any) => void) | undefined;
    scope: import("@tamagui/create-context").Scope;
    hasFit: boolean;
    position: number;
    snapPoints: (string | number)[];
    snapPointsMode: import("./sheet.types").SnapPointsMode;
    setMaxContentSize: import("react").Dispatch<import("react").SetStateAction<number>>;
    setPosition: (next: number) => void;
    setPositionImmediate: import("react").Dispatch<import("react").SetStateAction<number>>;
    onlyShowFrame: boolean;
} & {
    scrollEnabled: boolean;
    setHasScrollView: (val: boolean) => void;
} & {
    scope: import("@tamagui/create-context").Scope<SheetContextValue>;
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useSheetContext: (consumerName: string, scope: import("@tamagui/create-context").Scope<SheetContextValue | undefined>, options?: {
    warn?: boolean;
    fallback?: Partial<SheetContextValue> | undefined;
} | undefined) => SheetContextValue;
export declare const SheetControllerContext: import("react").Context<SheetControllerContextValue | null>;
export declare const ParentSheetContext: import("react").Context<{
    zIndex: number;
}>;
export declare const SheetInsideSheetContext: import("react").Context<((hasChild: boolean) => void) | null>;
//# sourceMappingURL=sheet.context.d.ts.map