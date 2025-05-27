import type { CheckboxContextType, CheckboxIndicatorProps, CheckboxSizes } from './checkbox.types';
import type { IconProps } from '@tamagui/helpers-icon';
export declare const CheckboxContext: import("@tamagui/web").StyledContext<CheckboxContextType>;
export declare const CheckboxFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: CheckboxSizes | undefined;
    disabled?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const CheckboxOverlay: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    size?: CheckboxSizes | undefined;
    checked?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const CheckboxIndicator: (props: CheckboxIndicatorProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<IconProps> | null;
//# sourceMappingURL=checkbox.styled.d.ts.map