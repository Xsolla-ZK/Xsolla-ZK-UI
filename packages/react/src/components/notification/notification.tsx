/* forked from @tamagui/toast */
/* https://github.com/tamagui/tamagui/blob/master/packages/toast */

import { AnimatePresence } from '@tamagui/animate-presence';
import { useEvent } from '@tamagui/core';
import { composeEventHandlers, withStaticProperties } from '@tamagui/helpers';
import { useControllableState } from '@tamagui/use-controllable-state';
import { forwardRef, useId } from 'react';
import { NotificationAnnounceExclude } from './announce/notification-announce';
import {
  useNotificationController,
  useNotificationState,
} from './imperative/notification-imperative';
import { NotificationImpl, useNotificationInteractiveContext } from './impl/notification-impl';
import { NotificationImplFrame } from './impl/notification-impl.styled';
import {
  NotificationCloseFrame,
  NotificationDescription,
  NotificationTitle,
} from './notification.styled';
import type { NotificationExtraProps } from './impl/notification-impl.types';
import type {
  NotificationActionProps,
  NotificationCloseProps,
  NotificationScopedProps,
} from './notification.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const NotificationClose = forwardRef<TamaguiElement, NotificationCloseProps>(
  (props: NotificationScopedProps<NotificationCloseProps>, forwardedRef) => {
    const { __scopeNotification, ...closeProps } = props;
    const interactiveContext = useNotificationInteractiveContext(__scopeNotification);

    return (
      <NotificationAnnounceExclude asChild>
        <NotificationCloseFrame
          aria-label="Dialog Close"
          {...closeProps}
          ref={forwardedRef}
          onPress={composeEventHandlers(props.onPress, interactiveContext.onClose)}
        />
      </NotificationAnnounceExclude>
    );
  },
);

const NotificationAction = forwardRef<
  TamaguiElement,
  NotificationScopedProps<NotificationActionProps>
>((props, forwardedRef) => {
  const { altText, ...actionProps } = props;
  if (!altText) return null;
  return (
    <NotificationAnnounceExclude altText={altText} asChild>
      <NotificationClose {...actionProps} ref={forwardedRef} />
    </NotificationAnnounceExclude>
  );
});

const NotificationComponent = NotificationImplFrame.styleable<NotificationExtraProps>(
  forwardRef((props, forwardedRef: ForwardedRef<TamaguiElement>) => {
    const {
      forceMount,
      open: openProp,
      defaultOpen,
      onOpenChange,
      size = '$500',
      ...toastProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? true,
      onChange: onOpenChange,
      strategy: 'most-recent-wins',
    });

    const currentNotification = useNotificationState();
    const { hide } = useNotificationController();

    const id = useId();
    const onPause = useEvent(props.onPause);
    const onResume = useEvent(props.onResume);
    const isHide = currentNotification?.hide === true;
    const shouldShow = (forceMount || open) && !isHide;

    return (
      <AnimatePresence key={id}>
        {shouldShow ? (
          <NotificationImpl
            id={id}
            open={open}
            size={size}
            {...toastProps}
            ref={forwardedRef}
            onClose={() => {
              setOpen(false);
              hide();
            }}
            onPause={onPause}
            onResume={onResume}
            onSwipeEnd={composeEventHandlers(props.onSwipeEnd, (_event) => {
              setOpen(false);
            })}
          />
        ) : null}
      </AnimatePresence>
    );
  }),
);

export const Notification = withStaticProperties(NotificationComponent, {
  Title: NotificationTitle,
  Description: NotificationDescription,
  Action: NotificationAction,
  Close: NotificationClose,
});
