import type { ScopedProps, SizeTokens, StackProps } from '@tamagui/core';
import type { Coords, flip, OffsetOptions, Placement, ReferenceType, shift, SizeOptions, Strategy, UseFloatingReturn } from '@tamagui/floating';
import type { ReactNode, Ref, RefObject } from 'react';
import type { View } from 'react-native';
type ShiftProps = typeof shift extends (options: infer Opts) => void ? Opts : never;
type FlipProps = typeof flip extends (options: infer Opts) => void ? Opts : never;
export type PopperContextShared = {
    hasFloating: boolean;
    arrowStyle?: Partial<Coords> & {
        centerOffset: number;
    };
    placement?: Placement;
    arrowRef: Ref<PopperArrowRef>;
    onArrowSize?: (val: number) => void;
};
export type PopperContextValue = UseFloatingReturn & PopperContextShared;
export type PopperContextSlowValue = PopperContextShared & Pick<UseFloatingReturn, 'context' | 'getReferenceProps' | 'getFloatingProps' | 'strategy' | 'update' | 'refs'>;
export type PopperProps = {
    /**
     * Popper is a component used by other components to create interfaces, so scope is required
     * For example Popover uses it internally and sets a default "POPOVER_SCOPE".
     */
    scope?: string;
    /**
     * Optional, will disable measuring updates when open is false for better performance
     * */
    open?: boolean;
    children?: ReactNode;
    /**
     * Determine the preferred placement of the content in relation to the trigger
     */
    placement?: Placement;
    /**
     * Attempts to shift the content to stay within the windiw
     * @see https://floating-ui.com/docs/shift
     */
    stayInFrame?: ShiftProps | boolean;
    /**
     * Allows content to switch sides when space is limited.
     * @see https://floating-ui.com/docs/flip
     */
    allowFlip?: FlipProps | boolean;
    /**
     * Resizes the content to fix inside the screen when space is limited
     * @see https://floating-ui.com/docs/size
     */
    resize?: boolean | Omit<SizeOptions, 'apply'>;
    /**
     * Choose between absolute or fixed positioning
     */
    strategy?: Strategy;
    /**
     * Move the content away from the trigger
     * @see https://floating-ui.com/docs/offset
     */
    offset?: OffsetOptions;
    disableRTL?: boolean;
    passThrough?: boolean;
};
export type PopperSetupOptions = {
    disableRTL?: boolean;
};
export type PopperAnchorProps = StackProps & {
    virtualRef?: RefObject<ReferenceType>;
    scope?: string;
};
export type PopperContentProps = ScopedProps<StackProps & {
    enableAnimationForPositionChange?: boolean;
    passThrough?: boolean;
}>;
export type PopperArrowExtraProps = ScopedProps<{
    offset?: number;
    size?: SizeTokens;
}>;
export type PopperArrowRef = HTMLElement | View;
export type PopperArrowProps = StackProps & PopperArrowExtraProps;
export {};
//# sourceMappingURL=popper.types.d.ts.map