import type {
  NotificationCloseFrame,
  NotificationDescription,
  NotificationTitle,
} from './notification.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps, ScopedProps } from '@tamagui/core';

export type NotificationSizes = keyof ComponentsConfig['toast'] | (string & {});

export type NotificationScopedProps<T> = ScopedProps<T, 'Notification'>;

export type NotificationTitleProps = GetProps<typeof NotificationTitle>;

export type NotificationDescriptionProps = GetProps<typeof NotificationDescription>;

type NotificationCloseFrameProps = GetProps<typeof NotificationCloseFrame>;

export type NotificationCloseProps = NotificationCloseFrameProps & {};

export type NotificationActionProps = NotificationCloseProps & {
  /**
   * A short description for an alternate way to carry out the action. For screen reader users
   * who will not be able to navigate to the button easily/quickly.
   * @example <NotificationAction altText="Goto account settings to updgrade">Upgrade</NotificationAction>
   * @example <NotificationAction altText="Undo (Alt+U)">Undo</NotificationAction>
   */
  altText: string;
};
