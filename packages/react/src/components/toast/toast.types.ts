import type { ToastCloseFrame, ToastDescription, ToastTitle } from './toast.styled';
import type { GetProps, ScopedProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk/react/utils';

export type ToastSizes = keyof ComponentsConfig['toast'];

export type ToastScopedProps<T> = ScopedProps<T, 'Toast'>;

export type ToastTitleProps = GetProps<typeof ToastTitle>;

export type ToastDescriptionProps = GetProps<typeof ToastDescription>;

type ToastCloseFrameProps = GetProps<typeof ToastCloseFrame>;

export type ToastCloseProps = ToastCloseFrameProps & {};

export type ToastActionProps = ToastCloseProps & {
  /**
   * A short description for an alternate way to carry out the action. For screen reader users
   * who will not be able to navigate to the button easily/quickly.
   * @example <ToastAction altText="Goto account settings to updgrade">Upgrade</ToastAction>
   * @example <ToastAction altText="Undo (Alt+U)">Undo</ToastAction>
   */
  altText: string;
};
