type ModalContextType = {
    variant: 'sheet' | 'dialog';
};
export declare const ModalContext: import("@tamagui/web").StyledContext<ModalContextType>;
export declare const ModalFrame: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    variant?: "dialog" | "sheet" | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export declare const ModalHeader: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
export declare const ModalHeaderContent: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
export declare const ModalHeaderTitle: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {}, import("@tamagui/web").StaticConfigPublic>;
export declare const ModalContent: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("react-native").ScrollView, import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").ScrollViewProps, import("@tamagui/web").StackStyleBase & {
    readonly contentContainerStyle?: Partial<import("@tamagui/web").GetFinalProps<import("react-native").ScrollViewProps, import("@tamagui/web").StackStyleBase, {}>> | undefined;
}, {
    fullscreen?: boolean | undefined;
}, {
    accept: {
        readonly contentContainerStyle: "style";
    };
} & import("@tamagui/web").StaticConfigPublic>;
export declare const ModalContentInner: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {}, import("@tamagui/web").StaticConfigPublic>;
export declare const ModalFooter: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStyleBase, {
    blured?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic>;
export {};
//# sourceMappingURL=modal.styled.d.ts.map