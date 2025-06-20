import type { InputProps } from './input.types';
import type { TamaguiElement } from '@tamagui/core';
export declare const Input: import("react").ForwardRefExoticComponent<Omit<Omit<any, "theme" | "debug" | "size" | `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").TextStylePropsBase | "hitSlop" | "children" | "id" | "needsOffscreenAlphaCompositing" | "onLayout" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "collapsableChildren" | "renderToHardwareTextureAndroid" | "focusable" | "tabIndex" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-modal" | "role" | "accessibilityLabelledBy" | "aria-labelledby" | "accessibilityLiveRegion" | "aria-live" | "screenReaderFocusable" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "accessibilityShowsLargeContentViewer" | "accessibilityLargeContentTitle" | "accessibilityRespondsToUserInteraction" | "disabled" | "onPress" | "onPressIn" | "onPressOut" | "group" | "value" | "tag" | "onFocus" | "onBlur" | "allowFontScaling" | "numberOfLines" | "maxFontSizeMultiplier" | "lineBreakStrategyIOS" | "selectionColor" | "textBreakStrategy" | "target" | "htmlFor" | "asChild" | "dangerouslySetInnerHTML" | "className" | "themeShallow" | "themeInverse" | "untilMeasured" | "componentName" | "disableOptimization" | "forceStyle" | "disableClassName" | "onChange" | "defaultValue" | "onContentSizeChange" | "onScroll" | "scrollEnabled" | "placeholderTextColor" | "autoCapitalize" | "autoComplete" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "submitBehavior" | "caretHidden" | "contextMenuHidden" | "editable" | "keyboardType" | "inputMode" | "maxLength" | "multiline" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onKeyPress" | "placeholder" | "readOnly" | "returnKeyType" | "enterKeyHint" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "inputAccessoryViewButtonLabel" | "disableKeyboardShortcuts" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "lineBreakModeIOS" | "smartInsertDelete" | "cursorColor" | "selectionHandleColor" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "showSoftInputOnFocus" | "rows" | "maxRows" | "minRows" | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}> & {
    size?: import("./input.types").InputSizes | undefined;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    maxRows?: number | undefined;
    minRows?: number | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}>>>> & Omit<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, "size" | keyof import("@tamagui/web").TextStylePropsBase | "disabled" | "selectionColor" | "placeholderTextColor" | "rows" | "maxRows" | "minRows"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}> & {
    size?: import("./input.types").InputSizes | undefined;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    maxRows?: number | undefined;
    minRows?: number | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}> & {
    size?: import("./input.types").InputSizes | undefined;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    maxRows?: number | undefined;
    minRows?: number | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("./input.types").InputSizes | undefined;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    maxRows?: number | undefined;
    minRows?: number | undefined;
}>>, keyof InputProps> & InputProps & import("react").RefAttributes<any>> & import("@tamagui/web").StaticComponentObject<Omit<Omit<any, "theme" | "debug" | "size" | `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").TextStylePropsBase | "hitSlop" | "children" | "id" | "needsOffscreenAlphaCompositing" | "onLayout" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "collapsableChildren" | "renderToHardwareTextureAndroid" | "focusable" | "tabIndex" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-modal" | "role" | "accessibilityLabelledBy" | "aria-labelledby" | "accessibilityLiveRegion" | "aria-live" | "screenReaderFocusable" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "accessibilityShowsLargeContentViewer" | "accessibilityLargeContentTitle" | "accessibilityRespondsToUserInteraction" | "disabled" | "onPress" | "onPressIn" | "onPressOut" | "group" | "value" | "tag" | "onFocus" | "onBlur" | "allowFontScaling" | "numberOfLines" | "maxFontSizeMultiplier" | "lineBreakStrategyIOS" | "selectionColor" | "textBreakStrategy" | "target" | "htmlFor" | "asChild" | "dangerouslySetInnerHTML" | "className" | "themeShallow" | "themeInverse" | "untilMeasured" | "componentName" | "disableOptimization" | "forceStyle" | "disableClassName" | "onChange" | "defaultValue" | "onContentSizeChange" | "onScroll" | "scrollEnabled" | "placeholderTextColor" | "autoCapitalize" | "autoComplete" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "submitBehavior" | "caretHidden" | "contextMenuHidden" | "editable" | "keyboardType" | "inputMode" | "maxLength" | "multiline" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onKeyPress" | "placeholder" | "readOnly" | "returnKeyType" | "enterKeyHint" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "inputAccessoryViewButtonLabel" | "disableKeyboardShortcuts" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "lineBreakModeIOS" | "smartInsertDelete" | "cursorColor" | "selectionHandleColor" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "showSoftInputOnFocus" | "rows" | "maxRows" | "minRows" | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}> & {
    size?: import("./input.types").InputSizes | undefined;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    maxRows?: number | undefined;
    minRows?: number | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}>>>> & Omit<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, "size" | keyof import("@tamagui/web").TextStylePropsBase | "disabled" | "selectionColor" | "placeholderTextColor" | "rows" | "maxRows" | "minRows"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}> & {
    size?: import("./input.types").InputSizes | undefined;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    maxRows?: number | undefined;
    minRows?: number | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}> & {
    size?: import("./input.types").InputSizes | undefined;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    maxRows?: number | undefined;
    minRows?: number | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("./input.types").InputSizes | undefined;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    maxRows?: number | undefined;
    minRows?: number | undefined;
}>>, keyof InputProps> & InputProps, any, Omit<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, "size" | keyof import("@tamagui/web").TextStylePropsBase | "disabled" | "selectionColor" | "placeholderTextColor" | "rows" | "maxRows" | "minRows"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}> & {
    size?: import("./input.types").InputSizes | undefined;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    maxRows?: number | undefined;
    minRows?: number | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}> & {
    size?: import("./input.types").InputSizes | undefined;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    maxRows?: number | undefined;
    minRows?: number | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase & {
    readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("./input.types").InputSizes | undefined;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    maxRows?: number | undefined;
    minRows?: number | undefined;
}>> & InputProps, {}, {}, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [Omit<Omit<any, "theme" | "debug" | "size" | `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/web").TextStylePropsBase | "hitSlop" | "children" | "id" | "needsOffscreenAlphaCompositing" | "onLayout" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "collapsableChildren" | "renderToHardwareTextureAndroid" | "focusable" | "tabIndex" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-modal" | "role" | "accessibilityLabelledBy" | "aria-labelledby" | "accessibilityLiveRegion" | "aria-live" | "screenReaderFocusable" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "accessibilityShowsLargeContentViewer" | "accessibilityLargeContentTitle" | "accessibilityRespondsToUserInteraction" | "disabled" | "onPress" | "onPressIn" | "onPressOut" | "group" | "value" | "tag" | "onFocus" | "onBlur" | "allowFontScaling" | "numberOfLines" | "maxFontSizeMultiplier" | "lineBreakStrategyIOS" | "selectionColor" | "textBreakStrategy" | "target" | "htmlFor" | "asChild" | "dangerouslySetInnerHTML" | "className" | "themeShallow" | "themeInverse" | "untilMeasured" | "componentName" | "disableOptimization" | "forceStyle" | "disableClassName" | "onChange" | "defaultValue" | "onContentSizeChange" | "onScroll" | "scrollEnabled" | "placeholderTextColor" | "autoCapitalize" | "autoComplete" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "submitBehavior" | "caretHidden" | "contextMenuHidden" | "editable" | "keyboardType" | "inputMode" | "maxLength" | "multiline" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onKeyPress" | "placeholder" | "readOnly" | "returnKeyType" | "enterKeyHint" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "inputAccessoryViewButtonLabel" | "disableKeyboardShortcuts" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "lineBreakModeIOS" | "smartInsertDelete" | "cursorColor" | "selectionHandleColor" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "showSoftInputOnFocus" | "rows" | "maxRows" | "minRows" | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    }> & {
        size?: import("./input.types").InputSizes | undefined;
        disabled?: boolean | undefined;
        rows?: number | undefined;
        maxRows?: number | undefined;
        minRows?: number | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    }>>>> & Omit<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, "size" | keyof import("@tamagui/web").TextStylePropsBase | "disabled" | "selectionColor" | "placeholderTextColor" | "rows" | "maxRows" | "minRows"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    }> & {
        size?: import("./input.types").InputSizes | undefined;
        disabled?: boolean | undefined;
        rows?: number | undefined;
        maxRows?: number | undefined;
        minRows?: number | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    }>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    }> & {
        size?: import("./input.types").InputSizes | undefined;
        disabled?: boolean | undefined;
        rows?: number | undefined;
        maxRows?: number | undefined;
        minRows?: number | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    }>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    }, {
        size?: import("./input.types").InputSizes | undefined;
        disabled?: boolean | undefined;
        rows?: number | undefined;
        maxRows?: number | undefined;
        minRows?: number | undefined;
    }>>, keyof InputProps> & InputProps, any, Omit<import("@tamagui/web").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, "size" | keyof import("@tamagui/web").TextStylePropsBase | "disabled" | "selectionColor" | "placeholderTextColor" | "rows" | "maxRows" | "minRows"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    }> & {
        size?: import("./input.types").InputSizes | undefined;
        disabled?: boolean | undefined;
        rows?: number | undefined;
        maxRows?: number | undefined;
        minRows?: number | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    }>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    }> & {
        size?: import("./input.types").InputSizes | undefined;
        disabled?: boolean | undefined;
        rows?: number | undefined;
        maxRows?: number | undefined;
        minRows?: number | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    }>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").TextStylePropsBase & {
        readonly placeholderTextColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
        readonly selectionColor?: Omit<import("@tamagui/web").ColorTokens | import("@tamagui/web").ThemeValueFallbackColor, "unset"> | undefined;
    }, {
        size?: import("./input.types").InputSizes | undefined;
        disabled?: boolean | undefined;
        rows?: number | undefined;
        maxRows?: number | undefined;
        minRows?: number | undefined;
    }>> & InputProps, {}, {}, {}];
} & {
    Props: import("react").ProviderExoticComponent<Partial<import("./input.types").InputContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    StartSlot: ({ children, ...props }: Omit<import("@tamagui/web").GetProps<typeof import("@tamagui/core").Stack>, "children"> & {
        children: import("react").ReactNode | ((context: import("./input.types").InputContextType) => import("react").ReactNode);
    }) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & import("react").RefAttributes<TamaguiElement>>;
    EndSlot: ({ children, ...props }: Omit<import("@tamagui/web").GetProps<typeof import("@tamagui/core").Stack>, "children"> & {
        children: import("react").ReactNode | ((context: import("./input.types").InputContextType) => import("react").ReactNode);
    }) => import("react").FunctionComponentElement<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {}>> & import("react").RefAttributes<TamaguiElement>>;
};
//# sourceMappingURL=input.d.ts.map