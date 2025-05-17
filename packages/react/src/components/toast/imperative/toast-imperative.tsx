import { isWeb } from '@tamagui/core';
import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { createNativeToast } from '../create-native-toast';
import type {
  ToastContextI,
  ToastData,
  ToastImperativeProviderProps,
} from './toast-imperative.types';

const ToastContext = createContext<ToastContextI>({
  nativeToast: null,
  show: () => false,
  hide: () => {},
  options: {},
});
const ToastCurrentContext = createContext<ToastData | null>(null);

export const useToastController = () => useContext(ToastContext);

export const useToastState = () => useContext(ToastCurrentContext);

export const ToastImperativeProvider = ({ children, options }: ToastImperativeProviderProps) => {
  const counterRef = useRef(0);

  const [toast, setToast] = useState<ToastData | null>(null);

  const [lastNativeToastRef, setLastNativeToastRef] = useState<ToastContextI['nativeToast']>(null);

  const show = useCallback<ToastContextI['show']>(
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
        const nativeToastResult = createNativeToast(title, showOptions ?? {});
        if (typeof nativeToastResult === 'object' && nativeToastResult.nativeToastRef) {
          setLastNativeToastRef(nativeToastResult.nativeToastRef);
        }
      }
      counterRef.current++;
      setToast({
        ...showOptions?.customData,
        ...showOptions,
        viewportName: showOptions?.viewportName ?? 'default',
        title,
        id: counterRef.current.toString(),
        isHandledNatively,
      });
      return true;
    },
    [setToast, JSON.stringify(options.native || null)],
  );

  const hide = useCallback(() => {
    lastNativeToastRef?.close();
    setToast((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        hide: true,
      };
    });

    setTimeout(() => {
      setToast(null);
    }, 100);
  }, [setToast, lastNativeToastRef]);

  const contextValue = useMemo(
    () => ({
      show,
      hide,
      nativeToast: lastNativeToastRef,
      options,
    }),
    [show, hide, lastNativeToastRef, JSON.stringify(options || null)],
  );

  return (
    <ToastContext.Provider value={contextValue}>
      <ToastCurrentContext.Provider value={toast}>{children}</ToastCurrentContext.Provider>
    </ToastContext.Provider>
  );
};
