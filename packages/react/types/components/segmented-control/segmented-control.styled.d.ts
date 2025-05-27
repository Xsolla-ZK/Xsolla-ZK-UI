import type { SegmentedControlContextValue, SegmentedControlSizes } from './segmented-control.types';
export declare const SegmentedControlContext: import("@tamagui/web").StyledContext<SegmentedControlContextValue>;
export declare const SegmentedControlFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: SegmentedControlSizes | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    backgrounded?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const SegmentedControlSegmentFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: SegmentedControlSizes | undefined;
    disabled?: boolean | undefined;
    active?: boolean | undefined;
    placement?: "left" | "right" | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const SegmentedControlSegmentText: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: SegmentedControlSizes | undefined;
    preset?: import("../..").TypographyPresets | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const SegmentedControlSegmentIcon: ({ children, icon, ...rest }: import("../..").XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/helpers-icon").IconProps> | null;
//# sourceMappingURL=segmented-control.styled.d.ts.map