import type { NotificationSizes } from '../notification.types';
import type { TamaguiElement } from '@tamagui/core';
declare const useNotificationInteractiveContext: (scope?: string) => {
    onClose: () => void;
    size: NotificationSizes;
};
declare const NotificationImpl: import("react").ForwardRefExoticComponent<{
    open?: boolean;
    onClose: () => void;
} & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | keyof import("@tamagui/core").StackStyleBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: NotificationSizes | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: NotificationSizes | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
    size?: NotificationSizes | undefined;
}>> & import("./notification-impl.types").NotificationExtraProps & import("react").RefAttributes<TamaguiElement>>;
export { NotificationImpl, useNotificationInteractiveContext };
//# sourceMappingURL=notification-impl.d.ts.map