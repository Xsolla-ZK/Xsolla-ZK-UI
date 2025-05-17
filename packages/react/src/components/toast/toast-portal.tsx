import { Portal } from '@tamagui/portal';
import { Platform } from 'react-native';
import { ReprogapateToastProvider, useToastProviderContext } from './provider/toast-provider';
import type { ReactNode } from 'react';

export function ToastPortal({ children, zIndex }: { children: ReactNode; zIndex?: number }) {
  let content = children;
  const context = useToastProviderContext();
  if (Platform.OS === 'android' || Platform.OS === 'ios') {
    content = <ReprogapateToastProvider context={context}>{children}</ReprogapateToastProvider>;
  }
  return <Portal zIndex={zIndex || Number.MAX_SAFE_INTEGER}>{content}</Portal>;
}
