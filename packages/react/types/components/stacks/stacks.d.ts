import type { GetProps, SizeTokens } from '@tamagui/core';
export type YStackProps = GetProps<typeof YStack>;
export type XStackProps = YStackProps;
export type ZStackProps = YStackProps;
export declare const fullscreenStyle: {
    readonly position: "absolute";
    readonly top: 0;
    readonly left: 0;
    readonly right: 0;
    readonly bottom: 0;
};
type Insets = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
};
/**
 * @summary A view that arranges its children in a vertical line.
 * @see — Docs https://tamagui.dev/ui/stacks#xstack-ystack-zstack
 */
export declare const YStack: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    elevation?: number | SizeTokens | undefined;
    inset?: number | SizeTokens | Insets | null | undefined;
    fullscreen?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
/**
 * @summary A view that arranges its children in a horizontal line.
 * @see — Docs https://tamagui.dev/ui/stacks#xstack-ystack-zstack
 */
export declare const XStack: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    elevation?: number | SizeTokens | undefined;
    inset?: number | SizeTokens | Insets | null | undefined;
    fullscreen?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
/**
 * @summary A view that stacks its children on top of each other.
 * @see — Docs https://tamagui.dev/ui/stacks#xstack-ystack-zstack
 */
export declare const ZStack: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    elevation?: number | SizeTokens | undefined;
    inset?: number | SizeTokens | Insets | null | undefined;
    fullscreen?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic & {
    neverFlatten: true;
    isZStack: true;
}>;
export {};
//# sourceMappingURL=stacks.d.ts.map