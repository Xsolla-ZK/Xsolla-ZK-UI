import { createCollection } from '@tamagui/collection';
import { createStyledContext } from '@tamagui/core';
import { startTransition } from '@tamagui/start-transition';
import { useCallback, useId, useMemo, useRef, useState } from 'react';
import { ToastImperativeProvider } from '../imperative/toast-imperative';
import { TOAST_CONTEXT } from '../toast.constants';
import type { ToastScopedProps } from '../toast.types';
import type { ToastProviderContextValue, ToastProviderProps } from './toast-provider.types';
import type { TamaguiElement } from '@tamagui/core';
import type { PropsWithChildren } from 'react';

const [Collection, useCollection] = createCollection<TamaguiElement>('Toast');

const { Provider: ToastProviderProvider, useStyledContext: useToastProviderContext } =
  createStyledContext<ToastProviderContextValue>();

const ToastProvider = (props: ToastScopedProps<ToastProviderProps>) => {
  const {
    __scopeToast,
    id: providedId,
    burntOptions,
    native,
    notificationOptions,
    label = 'Notification',
    duration = 5000,
    swipeDirection = 'right',
    swipeThreshold = 50,
    children,
  } = props;
  const backupId = useId();
  const id = providedId ?? backupId;
  const [viewports, setViewports] = useState<ToastProviderContextValue['viewports']>({});
  const [toastCount, setToastCount] = useState(0);
  const isFocusedToastEscapeKeyDownRef = useRef(false);
  const isClosePausedRef = useRef(false);

  const handleViewportChange = useCallback((name: string, viewport: TamaguiElement | null) => {
    startTransition(() => {
      setViewports((prev) => ({ ...prev, [name]: viewport }));
    });
  }, []);

  // memo context to avoid expensive re-renders
  const options = useMemo(
    () => ({
      duration,
      burntOptions,
      native,
      notificationOptions,
    }),
    // nested simple object so JSON.stringify
    [JSON.stringify([duration, burntOptions, native, notificationOptions])],
  );

  return (
    <Collection.Provider __scopeCollection={__scopeToast || TOAST_CONTEXT}>
      <ToastProviderProvider
        scope={__scopeToast}
        id={id}
        label={label}
        duration={duration}
        swipeDirection={swipeDirection}
        swipeThreshold={swipeThreshold}
        toastCount={toastCount}
        viewports={viewports}
        onViewportChange={handleViewportChange}
        onToastAdd={useCallback(() => {
          startTransition(() => {
            setToastCount((prevCount) => prevCount + 1);
          });
        }, [])}
        onToastRemove={useCallback(() => {
          startTransition(() => {
            setToastCount((prevCount) => prevCount - 1);
          });
        }, [])}
        isFocusedToastEscapeKeyDownRef={isFocusedToastEscapeKeyDownRef}
        isClosePausedRef={isClosePausedRef}
        options={options}
      >
        <ToastImperativeProvider options={options}>{children}</ToastImperativeProvider>
      </ToastProviderProvider>
    </Collection.Provider>
  );
};

export function ReprogapateToastProvider(
  props: PropsWithChildren<{
    context: ToastProviderContextValue;
  }>,
) {
  const { children, context } = props;
  return (
    <Collection.Provider __scopeCollection={TOAST_CONTEXT}>
      <ToastProviderProvider {...context}>
        <ToastImperativeProvider options={context.options}>{children}</ToastImperativeProvider>
      </ToastProviderProvider>
    </Collection.Provider>
  );
}

export { Collection, ToastProvider, useCollection, useToastProviderContext };
export type { ToastProviderProps };
