import type { CustomData } from './imperative/toast-imperative.types';
import type { ToastProps } from './impl/toast-impl.types';
import type { ToastProviderProps } from './provider/toast-provider.types';
import type {
  ToastActionProps,
  ToastCloseProps,
  ToastDescriptionProps,
  ToastTitleProps,
} from './toast.types';
import type { ToastViewportProps } from './viewport/toast-viewport.types';
import type { NativePlatform, NativeValue } from '@tamagui/core';

export { useToastController, useToastState } from './imperative/toast-imperative';
export { ToastProvider } from './provider/toast-provider';
export { ToastViewport } from './viewport/toast-viewport';
export { Toast } from './toast';

export type {
  // imperative
  CustomData,
  ToastActionProps,
  ToastCloseProps,
  ToastDescriptionProps,
  NativePlatform as ToastNativePlatform,
  // backwards
  NativeValue as ToastNativeValue,
  ToastProps,
  ToastProviderProps,
  ToastTitleProps,
  ToastViewportProps,
};
