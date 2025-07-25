import type { ButtonContextType } from './button.types';
import type { TamaguiElement } from '@tamagui/core';
export declare const Button: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps, import("@tamagui/web").StackStyleBase, {
    size?: import("./button.types").ButtonSizes | undefined;
    variant?: import("./button.types").ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./button.types").ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
}>, "theme" | "debug" | "size" | `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "variant" | "hitSlop" | "children" | "id" | "needsOffscreenAlphaCompositing" | "onLayout" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "collapsableChildren" | "renderToHardwareTextureAndroid" | "focusable" | "tabIndex" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-modal" | "role" | "accessibilityLabelledBy" | "aria-labelledby" | "accessibilityLiveRegion" | "aria-live" | "screenReaderFocusable" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "accessibilityShowsLargeContentViewer" | "accessibilityLargeContentTitle" | "accessibilityRespondsToUserInteraction" | "disabled" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "group" | "tag" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "dataSet" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "href" | "hrefAttrs" | "elevationAndroid" | "rel" | "download" | "target" | "htmlFor" | "asChild" | "dangerouslySetInnerHTML" | "className" | "themeShallow" | "themeInverse" | "untilMeasured" | "componentName" | "disableOptimization" | "forceStyle" | "disableClassName" | keyof import("@tamagui/web").StackStyleBase | "pressable" | "blured" | "tone" | "isLoading" | "fullWidth" | "hasIconLeft" | "hasIconRight" | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: import("./button.types").ButtonSizes | undefined;
    variant?: import("./button.types").ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./button.types").ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps, "size" | "variant" | "disabled" | keyof import("@tamagui/web").StackStyleBase | "pressable" | "blured" | "tone" | "isLoading" | "fullWidth" | "hasIconLeft" | "hasIconRight"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: import("./button.types").ButtonSizes | undefined;
    variant?: import("./button.types").ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./button.types").ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: import("./button.types").ButtonSizes | undefined;
    variant?: import("./button.types").ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./button.types").ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
    size?: import("./button.types").ButtonSizes | undefined;
    variant?: import("./button.types").ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./button.types").ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
}>> & import("react").RefAttributes<TamaguiElement>> & import("@tamagui/web").StaticComponentObject<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps, import("@tamagui/web").StackStyleBase, {
    size?: import("./button.types").ButtonSizes | undefined;
    variant?: import("./button.types").ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./button.types").ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
}>, "theme" | "debug" | "size" | `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "variant" | "hitSlop" | "children" | "id" | "needsOffscreenAlphaCompositing" | "onLayout" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "collapsableChildren" | "renderToHardwareTextureAndroid" | "focusable" | "tabIndex" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-modal" | "role" | "accessibilityLabelledBy" | "aria-labelledby" | "accessibilityLiveRegion" | "aria-live" | "screenReaderFocusable" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "accessibilityShowsLargeContentViewer" | "accessibilityLargeContentTitle" | "accessibilityRespondsToUserInteraction" | "disabled" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "group" | "tag" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "dataSet" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "href" | "hrefAttrs" | "elevationAndroid" | "rel" | "download" | "target" | "htmlFor" | "asChild" | "dangerouslySetInnerHTML" | "className" | "themeShallow" | "themeInverse" | "untilMeasured" | "componentName" | "disableOptimization" | "forceStyle" | "disableClassName" | keyof import("@tamagui/web").StackStyleBase | "pressable" | "blured" | "tone" | "isLoading" | "fullWidth" | "hasIconLeft" | "hasIconRight" | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: import("./button.types").ButtonSizes | undefined;
    variant?: import("./button.types").ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./button.types").ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps, "size" | "variant" | "disabled" | keyof import("@tamagui/web").StackStyleBase | "pressable" | "blured" | "tone" | "isLoading" | "fullWidth" | "hasIconLeft" | "hasIconRight"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: import("./button.types").ButtonSizes | undefined;
    variant?: import("./button.types").ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./button.types").ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: import("./button.types").ButtonSizes | undefined;
    variant?: import("./button.types").ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./button.types").ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
    size?: import("./button.types").ButtonSizes | undefined;
    variant?: import("./button.types").ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./button.types").ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
}>>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps, "size" | "variant" | "disabled" | keyof import("@tamagui/web").StackStyleBase | "pressable" | "blured" | "tone" | "isLoading" | "fullWidth" | "hasIconLeft" | "hasIconRight"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: import("./button.types").ButtonSizes | undefined;
    variant?: import("./button.types").ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./button.types").ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: import("./button.types").ButtonSizes | undefined;
    variant?: import("./button.types").ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./button.types").ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
    size?: import("./button.types").ButtonSizes | undefined;
    variant?: import("./button.types").ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./button.types").ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
}>>, import("@tamagui/web").StackStyleBase, {
    size?: import("./button.types").ButtonSizes | undefined;
    variant?: import("./button.types").ButtonVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./button.types").ButtonTone | undefined;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
}, import("@tamagui/web").StaticConfigPublic> & Omit<import("@tamagui/web").StaticConfigPublic, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps, import("@tamagui/web").StackStyleBase, {
        size?: import("./button.types").ButtonSizes | undefined;
        variant?: import("./button.types").ButtonVariants | undefined;
        disabled?: boolean | undefined;
        pressable?: boolean | undefined;
        blured?: boolean | undefined;
        tone?: import("./button.types").ButtonTone | undefined;
        isLoading?: boolean | undefined;
        fullWidth?: boolean | undefined;
        hasIconLeft?: boolean | undefined;
        hasIconRight?: boolean | undefined;
    }>, "theme" | "debug" | "size" | `$${string}` | `$${number}` | import("@tamagui/web").GroupMediaKeys | `$theme-${string}` | `$theme-${number}` | "variant" | "hitSlop" | "children" | "id" | "needsOffscreenAlphaCompositing" | "onLayout" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "collapsableChildren" | "renderToHardwareTextureAndroid" | "focusable" | "tabIndex" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-modal" | "role" | "accessibilityLabelledBy" | "aria-labelledby" | "accessibilityLiveRegion" | "aria-live" | "screenReaderFocusable" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "accessibilityShowsLargeContentViewer" | "accessibilityLargeContentTitle" | "accessibilityRespondsToUserInteraction" | "disabled" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "group" | "tag" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "dataSet" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "href" | "hrefAttrs" | "elevationAndroid" | "rel" | "download" | "target" | "htmlFor" | "asChild" | "dangerouslySetInnerHTML" | "className" | "themeShallow" | "themeInverse" | "untilMeasured" | "componentName" | "disableOptimization" | "forceStyle" | "disableClassName" | keyof import("@tamagui/web").StackStyleBase | "pressable" | "blured" | "tone" | "isLoading" | "fullWidth" | "hasIconLeft" | "hasIconRight" | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        size?: import("./button.types").ButtonSizes | undefined;
        variant?: import("./button.types").ButtonVariants | undefined;
        disabled?: boolean | undefined;
        pressable?: boolean | undefined;
        blured?: boolean | undefined;
        tone?: import("./button.types").ButtonTone | undefined;
        isLoading?: boolean | undefined;
        fullWidth?: boolean | undefined;
        hasIconLeft?: boolean | undefined;
        hasIconRight?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>>> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps, "size" | "variant" | "disabled" | keyof import("@tamagui/web").StackStyleBase | "pressable" | "blured" | "tone" | "isLoading" | "fullWidth" | "hasIconLeft" | "hasIconRight"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        size?: import("./button.types").ButtonSizes | undefined;
        variant?: import("./button.types").ButtonVariants | undefined;
        disabled?: boolean | undefined;
        pressable?: boolean | undefined;
        blured?: boolean | undefined;
        tone?: import("./button.types").ButtonTone | undefined;
        isLoading?: boolean | undefined;
        fullWidth?: boolean | undefined;
        hasIconLeft?: boolean | undefined;
        hasIconRight?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        size?: import("./button.types").ButtonSizes | undefined;
        variant?: import("./button.types").ButtonVariants | undefined;
        disabled?: boolean | undefined;
        pressable?: boolean | undefined;
        blured?: boolean | undefined;
        tone?: import("./button.types").ButtonTone | undefined;
        isLoading?: boolean | undefined;
        fullWidth?: boolean | undefined;
        hasIconLeft?: boolean | undefined;
        hasIconRight?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        size?: import("./button.types").ButtonSizes | undefined;
        variant?: import("./button.types").ButtonVariants | undefined;
        disabled?: boolean | undefined;
        pressable?: boolean | undefined;
        blured?: boolean | undefined;
        tone?: import("./button.types").ButtonTone | undefined;
        isLoading?: boolean | undefined;
        fullWidth?: boolean | undefined;
        hasIconLeft?: boolean | undefined;
        hasIconRight?: boolean | undefined;
    }>>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("..").BoardProps, "size" | "variant" | "disabled" | keyof import("@tamagui/web").StackStyleBase | "pressable" | "blured" | "tone" | "isLoading" | "fullWidth" | "hasIconLeft" | "hasIconRight"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        size?: import("./button.types").ButtonSizes | undefined;
        variant?: import("./button.types").ButtonVariants | undefined;
        disabled?: boolean | undefined;
        pressable?: boolean | undefined;
        blured?: boolean | undefined;
        tone?: import("./button.types").ButtonTone | undefined;
        isLoading?: boolean | undefined;
        fullWidth?: boolean | undefined;
        hasIconLeft?: boolean | undefined;
        hasIconRight?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
        size?: import("./button.types").ButtonSizes | undefined;
        variant?: import("./button.types").ButtonVariants | undefined;
        disabled?: boolean | undefined;
        pressable?: boolean | undefined;
        blured?: boolean | undefined;
        tone?: import("./button.types").ButtonTone | undefined;
        isLoading?: boolean | undefined;
        fullWidth?: boolean | undefined;
        hasIconLeft?: boolean | undefined;
        hasIconRight?: boolean | undefined;
    } & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
        size?: import("./button.types").ButtonSizes | undefined;
        variant?: import("./button.types").ButtonVariants | undefined;
        disabled?: boolean | undefined;
        pressable?: boolean | undefined;
        blured?: boolean | undefined;
        tone?: import("./button.types").ButtonTone | undefined;
        isLoading?: boolean | undefined;
        fullWidth?: boolean | undefined;
        hasIconLeft?: boolean | undefined;
        hasIconRight?: boolean | undefined;
    }>>, import("@tamagui/web").StackStyleBase, {
        size?: import("./button.types").ButtonSizes | undefined;
        variant?: import("./button.types").ButtonVariants | undefined;
        disabled?: boolean | undefined;
        pressable?: boolean | undefined;
        blured?: boolean | undefined;
        tone?: import("./button.types").ButtonTone | undefined;
        isLoading?: boolean | undefined;
        fullWidth?: boolean | undefined;
        hasIconLeft?: boolean | undefined;
        hasIconRight?: boolean | undefined;
    }, import("@tamagui/web").StaticConfigPublic];
} & {
    Props: import("react").ProviderExoticComponent<Partial<ButtonContextType> & {
        children?: import("react").ReactNode;
        scope?: string;
    }>;
    Text: import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TamaDefer, import("@tamagui/web").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
        size?: import("./button.types").ButtonSizes | undefined;
        variant?: import("./button.types").ButtonVariants | undefined;
    }, import("@tamagui/web").StaticConfigPublic>;
    Icon: ({ children, icon, ...rest }: import("../..").XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/helpers-icon").IconProps> | null;
};
//# sourceMappingURL=button.d.ts.map