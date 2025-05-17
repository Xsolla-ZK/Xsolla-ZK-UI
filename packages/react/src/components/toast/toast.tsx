/* forked from @tamagui/toast */
/* https://github.com/tamagui/tamagui/blob/master/packages/toast */

import { AnimatePresence } from '@tamagui/animate-presence';
import { useEvent } from '@tamagui/core';
import { composeEventHandlers, withStaticProperties } from '@tamagui/helpers';
import { useControllableState } from '@tamagui/use-controllable-state';
import { forwardRef, useId } from 'react';
import { ToastAnnounceExclude } from './announce/toast-announce';
import { useToastController, useToastState } from './imperative/toast-imperative';
import { ToastImpl, useToastInteractiveContext } from './impl/toast-impl';
import { ToastImplFrame } from './impl/toast-impl.styled';
import { ToastCloseFrame, ToastDescription, ToastTitle } from './toast.styled';
import type { ToastExtraProps } from './impl/toast-impl.types';
import type { ToastActionProps, ToastCloseProps, ToastScopedProps } from './toast.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const ToastClose = forwardRef<TamaguiElement, ToastCloseProps>(
  (props: ToastScopedProps<ToastCloseProps>, forwardedRef) => {
    const { __scopeToast, ...closeProps } = props;
    const interactiveContext = useToastInteractiveContext(__scopeToast);

    return (
      <ToastAnnounceExclude asChild>
        <ToastCloseFrame
          aria-label="Dialog Close"
          {...closeProps}
          ref={forwardedRef}
          onPress={composeEventHandlers(props.onPress, interactiveContext.onClose)}
        />
      </ToastAnnounceExclude>
    );
  },
);

const ToastAction = forwardRef<TamaguiElement, ToastScopedProps<ToastActionProps>>(
  (props, forwardedRef) => {
    const { altText, ...actionProps } = props;
    if (!altText) return null;
    return (
      <ToastAnnounceExclude altText={altText} asChild>
        <ToastClose {...actionProps} ref={forwardedRef} />
      </ToastAnnounceExclude>
    );
  },
);

const ToastComponent = ToastImplFrame.styleable<ToastExtraProps>(
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

    const currentToast = useToastState();
    const { hide } = useToastController();

    const id = useId();
    const onPause = useEvent(props.onPause);
    const onResume = useEvent(props.onResume);
    const isHide = currentToast?.hide === true;
    const shouldShow = (forceMount || open) && !isHide;

    return (
      <AnimatePresence key={id}>
        {shouldShow ? (
          <ToastImpl
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

export const Toast = withStaticProperties(ToastComponent, {
  Title: ToastTitle,
  Description: ToastDescription,
  Action: ToastAction,
  Close: ToastClose,
});
