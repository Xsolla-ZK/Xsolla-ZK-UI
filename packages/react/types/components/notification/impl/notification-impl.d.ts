import type { NotificationSizes } from '../notification.types';
import type { TamaguiElement } from '@tamagui/core';
declare const useNotificationInteractiveContext: (scope?: string) => {
    onClose: () => void;
    size: NotificationSizes;
};
declare const NotificationImpl: import("react").ForwardRefExoticComponent<{
    open?: boolean;
    onClose: () => void;
} & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | keyof import("@tamagui/web").StackStyleBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: NotificationSizes | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase> & {
    size?: NotificationSizes | undefined;
} & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStyleBase>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStyleBase, {
    size?: NotificationSizes | undefined;
}>> & import("./notification-impl.types").NotificationExtraProps & import("react").RefAttributes<TamaguiElement>>;
export { NotificationImpl, useNotificationInteractiveContext };
//# sourceMappingURL=notification-impl.d.ts.map