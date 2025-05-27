import { TextInput } from 'react-native';
import type { InlineInputSizes } from './inline-input.types';
export declare const InlineInputElement: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, TextInput, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: InlineInputSizes | undefined;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    maxRows?: number | undefined;
    minRows?: number | undefined;
}, {
    isInput: true;
    accept: {
        readonly placeholderTextColor: "color";
        readonly selectionColor: "color";
    };
    validStyles: {
        [key: string]: boolean;
    } | undefined;
}>;
//# sourceMappingURL=inline-input.styled.d.ts.map