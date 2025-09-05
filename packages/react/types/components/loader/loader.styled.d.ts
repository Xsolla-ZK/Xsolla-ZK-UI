import { Circle } from 'react-native-svg';
import type { LoaderContextType } from './loader.types';
export declare const LoaderContext: import("react").Context<LoaderContextType> & {
    context: import("react").Context<LoaderContextType>;
    props: Object | undefined;
    Provider: import("react").ProviderExoticComponent<Partial<LoaderContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    useStyledContext: (scope?: string) => LoaderContextType;
} & Omit<{
    contextMediaProps: "size"[];
    Provider: <P extends Record<string, unknown>>({ children, componentProps, ...restProps }: {
        componentProps?: P | undefined;
        children?: import("react").ReactNode;
        scope?: string;
    } & Partial<LoaderContextType>) => import("react/jsx-runtime").JSX.Element;
}, "contextMediaProps"> & {
    readonly __contextMediaProps: "size"[];
};
export declare const LoaderFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: number | undefined;
    vertical?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const LoaderText: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
    size?: number | undefined;
    mainColor?: `$${string}` | `$${number}` | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const LoaderSpin: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, Circle, import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native-svg").CircleProps, import("@tamagui/core").StackStyleBase, {}, import("@tamagui/core").StaticConfigPublic>;
//# sourceMappingURL=loader.styled.d.ts.map