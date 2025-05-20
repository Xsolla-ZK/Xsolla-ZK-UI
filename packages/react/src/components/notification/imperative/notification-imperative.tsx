import { isWeb } from '@tamagui/core';
import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { createNativeNotification } from '../create-native-notification';
import type {
  NotificationContextI,
  NotificationData,
  NotificationImperativeProviderProps,
} from './notification-imperative.types';

const NotificationContext = createContext<NotificationContextI>({
  nativeNotification: null,
  show: () => false,
  hide: () => {},
  options: {},
});
const NotificationCurrentContext = createContext<NotificationData | null>(null);

export const useNotificationController = () => useContext(NotificationContext);

export const useNotificationState = () => useContext(NotificationCurrentContext);

export const NotificationImperativeProvider = ({
  children,
  options,
}: NotificationImperativeProviderProps) => {
  const counterRef = useRef(0);

  const [toast, setNotification] = useState<NotificationData | null>(null);

  const [lastNativeNotificationRef, setLastNativeNotificationRef] =
    useState<NotificationContextI['nativeNotification']>(null);

  const show = useCallback<NotificationContextI['show']>(
    (title, showOptions) => {
      const native = showOptions?.native ?? options.native;
      const isWebNative = Array.isArray(native) ? native.includes('web') : native === 'web';
      const isMobileNative = Array.isArray(native)
        ? native.includes('mobile')
        : native === 'mobile';
      const isAndroidNative =
        isMobileNative ||
        (Array.isArray(native) ? native.includes('android') : native === 'android');
      const isIosNative =
        isMobileNative || (Array.isArray(native) ? native.includes('ios') : native === 'ios');

      const isHandledNatively =
        native === true ||
        (isWeb && isWebNative) ||
        (!isWeb && isMobileNative) ||
        (Platform.OS === 'android' && isAndroidNative) ||
        (Platform.OS === 'ios' && isIosNative);

      if (isHandledNatively) {
        const nativeNotificationResult = createNativeNotification(title, showOptions ?? {});
        if (
          typeof nativeNotificationResult === 'object' &&
          nativeNotificationResult.nativeNotificationRef
        ) {
          setLastNativeNotificationRef(nativeNotificationResult.nativeNotificationRef);
        }
      }
      counterRef.current++;
      setNotification({
        ...showOptions?.customData,
        ...showOptions,
        viewportName: showOptions?.viewportName ?? 'default',
        title,
        id: counterRef.current.toString(),
        isHandledNatively,
      });
      return true;
    },
    [setNotification, JSON.stringify(options.native || null)],
  );

  const hide = useCallback(() => {
    lastNativeNotificationRef?.close();
    setNotification((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        hide: true,
      };
    });

    setTimeout(() => {
      setNotification(null);
    }, 100);
  }, [setNotification, lastNativeNotificationRef]);

  const contextValue = useMemo(
    () => ({
      show,
      hide,
      nativeNotification: lastNativeNotificationRef,
      options,
    }),
    [show, hide, lastNativeNotificationRef, JSON.stringify(options || null)],
  );

  return (
    <NotificationContext.Provider value={contextValue}>
      <NotificationCurrentContext.Provider value={toast}>
        {children}
      </NotificationCurrentContext.Provider>
    </NotificationContext.Provider>
  );
};
