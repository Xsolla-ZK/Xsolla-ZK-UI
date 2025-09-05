import { createStyledContext } from '@tamagui/core';
import type { PopperContextSlowValue, PopperContextValue } from './popper.types';
export declare const PopperContextFast: import("@tamagui/core").StyledContext<PopperContextValue>;
export declare const PopperContextSlow: import("@tamagui/core").StyledContext<PopperContextSlowValue>;
export declare const PopperPositionContext: typeof createStyledContext;
export declare const usePopperContext: (scope?: string) => PopperContextValue, PopperProviderFast: import("react").Provider<PopperContextValue> & import("react").ProviderExoticComponent<Partial<PopperContextValue> & {
    children?: import("react").ReactNode;
    scope?: string;
}>;
export declare const usePopperContextSlow: (scope?: string) => PopperContextSlowValue, PopperProviderSlow: import("react").Provider<PopperContextSlowValue> & import("react").ProviderExoticComponent<Partial<PopperContextSlowValue> & {
    children?: import("react").ReactNode;
    scope?: string;
}>;
//# sourceMappingURL=popper.context.d.ts.map