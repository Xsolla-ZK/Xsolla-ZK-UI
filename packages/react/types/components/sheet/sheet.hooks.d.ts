import type { ScrollBridge, SheetContextValue, SheetProps } from './sheet.types';
import type { TamaguiElement } from '@tamagui/core';
import type { View } from 'react-native';
export declare const useSheetController: () => {
    controller: import("./sheet.types").SheetControllerContextValue | null;
    isHidden: boolean | undefined;
    isShowingNonSheet: boolean | undefined;
    disableDrag: boolean | undefined;
};
export declare const useSheetOpenState: (props: SheetProps) => {
    open: boolean;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    isHidden: boolean | undefined;
    controller: import("./sheet.types").SheetControllerContextValue | null;
};
export declare function useSheetProviderProps(props: SheetProps, state: ReturnType<typeof useSheetOpenState>, options?: {
    onOverlayComponent?: (comp: any) => void;
}): {
    screenSize: number;
    maxSnapPoint: string | number;
    removeScrollEnabled: boolean | undefined;
    scrollBridge: ScrollBridge;
    modal: boolean;
    open: boolean;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    hidden: boolean;
    contentRef: import("react").RefObject<View | null>;
    handleRef: import("react").RefObject<TamaguiElement | null>;
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
};
export declare const useSheetOffscreenSize: ({ snapPoints, position, screenSize, frameSize, snapPointsMode, }: SheetContextValue) => number;
//# sourceMappingURL=sheet.hooks.d.ts.map