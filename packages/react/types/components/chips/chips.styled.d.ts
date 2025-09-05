import type { ChipSizes, ChipsSizes, ChipVariants } from './chips.types';
import type { XORIconProps } from '../../types';
import type { ColorTokens } from '@tamagui/core';
export declare const ChipsFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: ChipsSizes | undefined;
    vertical?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const ChipFrame: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: ChipSizes | undefined;
    variant?: ChipVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./chips.types").ChipTone | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
    isSelected?: boolean | undefined;
}>, "theme" | "debug" | "space" | "size" | "zIndex" | `$${string}` | "background" | "borderColor" | "shadowColor" | `$${number}` | `$group-${string}` | `$group-${number}` | `$group-${string}-hover` | `$group-${string}-press` | `$group-${string}-focus` | `$group-${string}-focusVisible` | `$group-${string}-focusWithin` | `$group-${number}-hover` | `$group-${number}-press` | `$group-${number}-focus` | `$group-${number}-focusVisible` | `$group-${number}-focusWithin` | `$theme-${string}` | `$theme-${number}` | "variant" | "display" | "x" | "y" | "perspective" | "scale" | "scaleX" | "scaleY" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "transition" | "textWrap" | "contain" | "touchAction" | "cursor" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "userSelect" | "scrollbarWidth" | "transformOrigin" | "filter" | "mixBlendMode" | "backgroundImage" | "backgroundOrigin" | "backgroundPosition" | "backgroundRepeat" | "backgroundSize" | "backgroundClip" | "backgroundBlendMode" | "backgroundAttachment" | "clipPath" | "caretColor" | "transformStyle" | "mask" | "maskImage" | "textEmphasis" | "borderImage" | "float" | "content" | "overflowBlock" | "overflowInline" | "maskBorder" | "maskBorderMode" | "maskBorderOutset" | "maskBorderRepeat" | "maskBorderSlice" | "maskBorderSource" | "maskBorderWidth" | "maskClip" | "maskComposite" | "maskMode" | "maskOrigin" | "maskPosition" | "maskRepeat" | "maskSize" | "maskType" | "gridRow" | "gridRowEnd" | "gridRowGap" | "gridRowStart" | "gridColumn" | "gridColumnEnd" | "gridColumnGap" | "gridColumnStart" | "gridTemplateColumns" | "gridTemplateAreas" | "backdropFilter" | "containerType" | "blockSize" | "inlineSize" | "minBlockSize" | "maxBlockSize" | "objectFit" | "verticalAlign" | "minInlineSize" | "maxInlineSize" | "borderInlineColor" | "borderInlineStartColor" | "borderInlineEndColor" | "borderBlockWidth" | "borderBlockStartWidth" | "borderBlockEndWidth" | "borderInlineWidth" | "borderInlineStartWidth" | "borderInlineEndWidth" | "borderBlockStyle" | "borderBlockStartStyle" | "borderBlockEndStyle" | "borderInlineStyle" | "borderInlineStartStyle" | "borderInlineEndStyle" | "marginBlock" | "marginBlockStart" | "marginBlockEnd" | "marginInline" | "marginInlineStart" | "marginInlineEnd" | "paddingBlock" | "paddingBlockStart" | "paddingBlockEnd" | "paddingInline" | "paddingInlineStart" | "paddingInlineEnd" | "insetBlock" | "insetBlockStart" | "insetBlockEnd" | "insetInline" | "insetInlineStart" | "insetInlineEnd" | "spaceDirection" | "separator" | "animation" | "animateOnly" | "animatePresence" | "passThrough" | "backfaceVisibility" | "backgroundColor" | "borderBlockColor" | "borderBlockEndColor" | "borderBlockStartColor" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderCurve" | "borderEndColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderLeftColor" | "borderRadius" | "borderRightColor" | "borderStartColor" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "opacity" | "pointerEvents" | "isolation" | "boxShadow" | "experimental_backgroundImage" | "alignContent" | "alignItems" | "alignSelf" | "aspectRatio" | "borderBottomWidth" | "borderEndWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStartWidth" | "borderTopWidth" | "borderWidth" | "bottom" | "boxSizing" | "end" | "flex" | "flexBasis" | "flexDirection" | "rowGap" | "gap" | "columnGap" | "flexGrow" | "flexShrink" | "flexWrap" | "height" | "justifyContent" | "left" | "margin" | "marginBottom" | "marginEnd" | "marginHorizontal" | "marginLeft" | "marginRight" | "marginStart" | "marginTop" | "marginVertical" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "padding" | "paddingBottom" | "paddingEnd" | "paddingHorizontal" | "paddingLeft" | "paddingRight" | "paddingStart" | "paddingTop" | "paddingVertical" | "position" | "right" | "start" | "top" | "width" | "direction" | "inset" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "translateX" | "translateY" | "elevationAndroid" | "hitSlop" | "children" | "id" | "needsOffscreenAlphaCompositing" | "onLayout" | "removeClippedSubviews" | "style" | "testID" | "nativeID" | "collapsable" | "collapsableChildren" | "renderToHardwareTextureAndroid" | "focusable" | "tabIndex" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-modal" | "role" | "accessibilityLabelledBy" | "aria-labelledby" | "accessibilityLiveRegion" | "aria-live" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "accessibilityShowsLargeContentViewer" | "accessibilityLargeContentTitle" | "group" | "target" | "htmlFor" | "asChild" | "dangerouslySetInnerHTML" | "disabled" | "className" | "themeShallow" | "themeInverse" | "tag" | "untilMeasured" | "componentName" | "disableOptimization" | "forceStyle" | "disableClassName" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "hoverStyle" | "pressStyle" | "focusStyle" | "focusWithinStyle" | "focusVisibleStyle" | "disabledStyle" | "exitStyle" | "enterStyle" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onFocus" | "onBlur" | "dataSet" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "href" | "hrefAttrs" | "rel" | "download" | "blurAmount" | "pressable" | "blured" | "groupScope" | "tone" | "fullWidth" | "hasIconLeft" | "hasIconRight" | "isSelected"> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | "variant" | "disabled" | keyof import("@tamagui/core").StackStyleBase | "pressable" | "blured" | "tone" | "fullWidth" | "hasIconLeft" | "hasIconRight" | "isSelected"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: ChipSizes | undefined;
    variant?: ChipVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./chips.types").ChipTone | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
    isSelected?: boolean | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: ChipSizes | undefined;
    variant?: ChipVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./chips.types").ChipTone | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
    isSelected?: boolean | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
    size?: ChipSizes | undefined;
    variant?: ChipVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./chips.types").ChipTone | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
    isSelected?: boolean | undefined;
}>> & import("..").BoardProps, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | "variant" | "disabled" | keyof import("@tamagui/core").StackStyleBase | "pressable" | "blured" | "tone" | "fullWidth" | "hasIconLeft" | "hasIconRight" | "isSelected"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: ChipSizes | undefined;
    variant?: ChipVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./chips.types").ChipTone | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
    isSelected?: boolean | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: ChipSizes | undefined;
    variant?: ChipVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./chips.types").ChipTone | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
    isSelected?: boolean | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
    size?: ChipSizes | undefined;
    variant?: ChipVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./chips.types").ChipTone | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
    isSelected?: boolean | undefined;
}>> & import("..").BoardProps, import("@tamagui/core").StackStyleBase, {
    size?: ChipSizes | undefined;
    variant?: ChipVariants | undefined;
    disabled?: boolean | undefined;
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
    tone?: import("./chips.types").ChipTone | undefined;
    fullWidth?: boolean | undefined;
    hasIconLeft?: boolean | undefined;
    hasIconRight?: boolean | undefined;
    isSelected?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const ChipText: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
    size?: ChipSizes | undefined;
    variant?: ChipVariants | undefined;
    isSelected?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export declare const ChipIcon: (props: XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<import("@tamagui/core").GetFinalProps<import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native-svg").SvgProps, import("@tamagui/core").StackStyleBase, {
    color?: (ColorTokens | (string & {})) | undefined;
    size?: (number | import("@tamagui/core").SizeTokens) | undefined;
}>> | null;
//# sourceMappingURL=chips.styled.d.ts.map