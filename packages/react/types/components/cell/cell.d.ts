import { type TamaguiElement } from '@tamagui/core';
import type { CellBaseProps } from './cell.types';
export declare const Cell: import("react").ForwardRefExoticComponent<CellBaseProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps, "size" | keyof import("@tamagui/web").StackStyleBase | "pressable" | "blured" | "withBoard"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: import("./cell.types").CellSizes | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    withBoard?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: import("./cell.types").CellSizes | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    withBoard?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
    size?: import("./cell.types").CellSizes | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    withBoard?: boolean | undefined;
}>> & import("react").RefAttributes<TamaguiElement>> & {
    Slot: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("./cell.types").CellSizes | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Content: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
        size?: import("./cell.types").CellSizes | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
};
//# sourceMappingURL=cell.d.ts.map