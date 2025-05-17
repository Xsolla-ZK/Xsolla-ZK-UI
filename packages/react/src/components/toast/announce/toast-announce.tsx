import { useIsomorphicLayoutEffect } from '@tamagui/constants';
import { Text, useEvent } from '@tamagui/core';
import { Portal } from '@tamagui/portal';
import { startTransition } from '@tamagui/start-transition';

import { forwardRef } from 'react';
import { useEffect, useState } from 'react';
import { useToastProviderContext } from '../provider/toast-provider';
import { VisuallyHidden } from '../toast.styled';
import { ToastAnnounceExcludeFrame } from './toast-announce.styled';
import type { ToastAnnounceExcludeProps, ToastAnnounceProps } from './toast-announce.types';
import type { ToastScopedProps } from '../toast.types';
import type { TamaguiElement } from '@tamagui/core';

const ToastAnnounceExclude = forwardRef<
  TamaguiElement,
  ToastScopedProps<ToastAnnounceExcludeProps>
>((props, forwardedRef) => {
  const { altText, ...announceExcludeProps } = props;

  return (
    <ToastAnnounceExcludeFrame
      data-toast-announce-exclude=""
      data-toast-announce-alt={altText || undefined}
      {...announceExcludeProps}
      ref={forwardedRef}
    />
  );
});

const ToastAnnounce = (props: ToastScopedProps<ToastAnnounceProps>) => {
  const { __scopeToast, children, ...announceProps } = props;
  const context = useToastProviderContext(__scopeToast);
  const [renderAnnounceText, setRenderAnnounceText] = useState(false);
  const [isAnnounced, setIsAnnounced] = useState(false);

  // render text content in the next frame to ensure toast is announced in NVDA
  useNextFrame(() => {
    startTransition(() => {
      setRenderAnnounceText(true);
    });
  });

  // cleanup after announcing
  useEffect(() => {
    const timer = setTimeout(() => setIsAnnounced(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return isAnnounced ? null : (
    <Portal asChild>
      <VisuallyHidden {...announceProps}>
        {renderAnnounceText && (
          <Text>
            {context.label} {children}
          </Text>
        )}
      </VisuallyHidden>
    </Portal>
  );
};

function useNextFrame(callback = () => {}) {
  const fn = useEvent(callback);
  useIsomorphicLayoutEffect(() => {
    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(fn);
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [fn]);
}

export { ToastAnnounce, ToastAnnounceExclude };
