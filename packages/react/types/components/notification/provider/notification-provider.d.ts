import type { NotificationScopedProps } from '../notification.types';
import type { NotificationProviderContextValue, NotificationProviderProps } from './notification-provider.types';
import type { TamaguiElement } from '@tamagui/core';
import type { PropsWithChildren } from 'react';
declare const Collection: {
    readonly Provider: React.FC<{
        children?: React.ReactNode;
    } & {
        scope?: any;
    }>;
    readonly Slot: React.ForwardRefExoticComponent<import("@tamagui/collection").CollectionProps & {
        scope?: any;
    } & React.RefAttributes<TamaguiElement | undefined>>;
    readonly ItemSlot: import("react").ForwardRefExoticComponent<{
        children: React.ReactNode;
    } & {
        scope?: any;
    } & import("react").RefAttributes<TamaguiElement | undefined>>;
}, useCollection: (scope: string) => () => {
    ref: import("react").RefObject<TamaguiElement | undefined>;
}[];
declare const useNotificationProviderContext: (scope?: string) => NotificationProviderContextValue;
declare const NotificationProvider: (props: NotificationScopedProps<NotificationProviderProps>) => import("react/jsx-runtime").JSX.Element;
export declare function ReprogapateNotificationProvider(props: PropsWithChildren<{
    context: NotificationProviderContextValue;
}>): import("react/jsx-runtime").JSX.Element;
export { Collection, NotificationProvider, useCollection, useNotificationProviderContext };
export type { NotificationProviderProps };
//# sourceMappingURL=notification-provider.d.ts.map