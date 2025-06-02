import type { CellContextValue, CellSizes } from './cell.types';
export declare const CellContext: import("@tamagui/web").StyledContext<CellContextValue>;
export declare const CellFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: CellSizes | undefined;
    withBoard?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const CellBoardFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps, import("@tamagui/web").StackStyleBase, {
    size?: CellSizes | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    withBoard?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const CellSlot: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: CellSizes | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const CellContent: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: CellSizes | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
//# sourceMappingURL=cell.styled.d.ts.map