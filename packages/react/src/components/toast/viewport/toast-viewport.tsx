import { AnimatePresence } from '@tamagui/animate-presence';
import { useComposedRefs } from '@tamagui/compose-refs';
import { isWeb, type TamaguiElement } from '@tamagui/core';
import { PortalHost } from '@tamagui/portal';
import { forwardRef, memo, useCallback, useEffect, useRef } from 'react';
import { Collection, useCollection, useToastProviderContext } from '../provider/toast-provider';
import { ToastPortal } from '../toast-portal';
import {
  TOAST_CONTEXT,
  TOAST_FOCUS_PROXY_NAME,
  TOAST_VIEWPORT_DEFAULT_HOTKEY,
  TOAST_VIEWPORT_NAME,
  TOAST_VIEWPORT_PAUSE,
  TOAST_VIEWPORT_RESUME,
} from '../toast.constants';
import { VisuallyHidden } from '../toast.styled';
import { ToastViewportFrame, ToastViewportWrapperFrame } from './toast-viewport.styled';
import type { ToastScopedProps } from '../toast.types';
import type {
  FocusProxyElement,
  FocusProxyProps,
  ToastViewportProps,
} from './toast-viewport.types';

const FocusProxy = forwardRef<FocusProxyElement, ToastScopedProps<FocusProxyProps>>(
  (props, forwardedRef) => {
    const { __scopeToast, onFocusFromOutsideViewport, viewportName, ...proxyProps } = props;
    const context = useToastProviderContext(__scopeToast);
    const viewport = context.viewports[viewportName] as HTMLElement;

    return (
      <VisuallyHidden
        aria-hidden
        tabIndex={0}
        {...proxyProps}
        ref={forwardedRef}
        // Avoid page scrolling when focus is on the focus proxy
        position={isWeb ? ('fixed' as never) : 'absolute'}
        onFocus={(event) => {
          if (!isWeb) return;
          const prevFocusedElement = event.relatedTarget as HTMLElement | null;
          const isFocusFromOutsideViewport = !viewport?.contains(prevFocusedElement);
          if (isFocusFromOutsideViewport) onFocusFromOutsideViewport();
        }}
      />
    );
  },
);

FocusProxy.displayName = TOAST_FOCUS_PROXY_NAME;

const ToastViewport = memo(
  forwardRef<TamaguiElement, ToastScopedProps<ToastViewportProps>>((props, forwardedRef) => {
    const {
      __scopeToast,
      hotkey = TOAST_VIEWPORT_DEFAULT_HOTKEY,
      label = 'Notifications ({hotkey})',
      name = 'default',
      multipleToasts,
      zIndex,
      portalToRoot,
      ...viewportProps
    } = props;
    const context = useToastProviderContext(__scopeToast);
    const getItems = useCollection(__scopeToast || TOAST_CONTEXT);
    const headFocusProxyRef = useRef<FocusProxyElement>(null);
    const tailFocusProxyRef = useRef<FocusProxyElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLDivElement>(null);
    const onViewportChange = useCallback(
      (el: TamaguiElement) => {
        if (context.viewports[name] !== el) context.onViewportChange(name, el);
      },
      [name, context.viewports],
    );
    const composedRefs = useComposedRefs(forwardedRef, ref, onViewportChange);
    const hotkeyLabel = hotkey.join('+').replace(/Key/g, '').replace(/Digit/g, '');
    const hasToasts = context.toastCount > 0;

    useEffect(() => {
      if (!isWeb) return;
      if (context.toastCount === 0) return;
      const handleKeyDown = (event: KeyboardEvent) => {
        // we use `event.code` as it is consistent regardless of meta keys that were pressed.
        // for example, `event.key` for `Control+Alt+t` is `†` and `t !== †`
        const isHotkeyPressed = hotkey.every(
          (key) => event[key as keyof KeyboardEvent] || event.code === key,
        );
        if (isHotkeyPressed) ref.current?.focus();
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [hotkey, context.toastCount]);

    useEffect(() => {
      if (!isWeb) return;
      if (context.toastCount === 0) return;
      const wrapper = wrapperRef.current;
      const viewport = ref.current;
      if (hasToasts && wrapper && viewport) {
        const handlePause = () => {
          if (!context.isClosePausedRef.current) {
            const pauseEvent = new CustomEvent(TOAST_VIEWPORT_PAUSE);
            viewport.dispatchEvent(pauseEvent);
            context.isClosePausedRef.current = true;
          }
        };

        const handleResume = () => {
          if (context.isClosePausedRef.current) {
            const resumeEvent = new CustomEvent(TOAST_VIEWPORT_RESUME);
            viewport.dispatchEvent(resumeEvent);
            context.isClosePausedRef.current = false;
          }
        };

        const handleFocusOutResume = (event: FocusEvent) => {
          const isFocusMovingOutside = !wrapper.contains(event.relatedTarget as HTMLElement);
          if (isFocusMovingOutside) handleResume();
        };

        const handlePointerLeaveResume = () => {
          const isFocusInside = wrapper.contains(document.activeElement);
          if (!isFocusInside) handleResume();
        };

        // Toasts are not in the viewport React tree so we need to bind DOM events
        wrapper.addEventListener('focusin', handlePause);
        wrapper.addEventListener('focusout', handleFocusOutResume);
        wrapper.addEventListener('pointermove', handlePause);
        wrapper.addEventListener('pointerleave', handlePointerLeaveResume);
        window.addEventListener('blur', handlePause);
        window.addEventListener('focus', handleResume);
        return () => {
          wrapper.removeEventListener('focusin', handlePause);
          wrapper.removeEventListener('focusout', handleFocusOutResume);
          wrapper.removeEventListener('pointermove', handlePause);
          wrapper.removeEventListener('pointerleave', handlePointerLeaveResume);
          window.removeEventListener('blur', handlePause);
          window.removeEventListener('focus', handleResume);
        };
      }
    }, [hasToasts, context.isClosePausedRef, context.toastCount]);

    const getSortedTabbableCandidates = useCallback(
      ({ tabbingDirection }: { tabbingDirection: 'forwards' | 'backwards' }) => {
        const toastItems = getItems();
        const tabbableCandidates = toastItems.map((toastItem) => {
          const toastNode = toastItem.ref.current;
          const toastTabbableCandidates = [toastNode, ...getTabbableCandidates(toastNode)];
          return tabbingDirection === 'forwards'
            ? toastTabbableCandidates
            : toastTabbableCandidates.reverse();
        });
        return (
          tabbingDirection === 'forwards' ? tabbableCandidates.reverse() : tabbableCandidates
        ).flat();
      },
      [getItems],
    );

    useEffect(() => {
      if (!isWeb) return;
      if (context.toastCount === 0) return;

      const viewport = ref.current;
      // We programmatically manage tabbing as we are unable to influence
      // the source order with portals, this allows us to reverse the
      // tab order so that it runs from most recent toast to least
      if (viewport) {
        const handleKeyDown = (event: KeyboardEvent) => {
          const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
          const isTabKey = event.key === 'Tab' && !isMetaKey;

          if (isTabKey) {
            const focusedElement = document.activeElement;
            const isTabbingBackwards = event.shiftKey;
            const targetIsViewport = event.target === viewport;

            // If we're back tabbing after jumping to the viewport then we simply
            // proxy focus out to the preceding document
            if (targetIsViewport && isTabbingBackwards) {
              headFocusProxyRef.current?.focus();
              return;
            }

            const tabbingDirection = isTabbingBackwards ? 'backwards' : 'forwards';
            const sortedCandidates = getSortedTabbableCandidates({ tabbingDirection });
            const index = sortedCandidates.findIndex((candidate) => candidate === focusedElement);
            if (focusFirst(sortedCandidates.slice(index + 1))) {
              event.preventDefault();
            } else {
              // If we can't focus that means we're at the edges so we
              // proxy to the corresponding exit point and let the browser handle
              // tab/shift+tab keypress and implicitly pass focus to the next valid element in the document
              if (isTabbingBackwards) {
                headFocusProxyRef.current?.focus();
              } else {
                tailFocusProxyRef.current?.focus();
              }
            }
          }
        };

        // Toasts are not in the viewport React tree so we need to bind DOM events
        viewport.addEventListener('keydown', handleKeyDown);
        return () => viewport.removeEventListener('keydown', handleKeyDown);
      }
    }, [getItems, getSortedTabbableCandidates, context.toastCount]);

    const contents = (
      <ToastViewportWrapperFrame
        ref={wrapperRef}
        role="region"
        aria-label={label.replace('{hotkey}', hotkeyLabel)}
        // // Ensure virtual cursor from landmarks menus triggers focus/blur for pause/resume
        tabIndex={-1}
        // // incase list has size when empty (e.g. padding), we remove pointer events so
        // // it doesn't prevent interactions with page elements that it overlays
        // pointerEvents={hasToasts ? undefined : 'none'}
      >
        {hasToasts && (
          <FocusProxy
            __scopeToast={__scopeToast}
            viewportName={name}
            ref={headFocusProxyRef}
            onFocusFromOutsideViewport={() => {
              const tabbableCandidates = getSortedTabbableCandidates({
                tabbingDirection: 'forwards',
              });
              focusFirst(tabbableCandidates);
            }}
          />
        )}
        {/**
         * tabindex on the the list so that it can be focused when items are removed. we focus
         * the list instead of the viewport so it announces number of items remaining.
         */}
        <Collection.Slot __scopeCollection={__scopeToast || TOAST_CONTEXT}>
          <ToastViewportFrame
            focusable={context.toastCount > 0}
            ref={composedRefs}
            {...viewportProps}
          >
            <PortalHost
              render={(children) => (
                <AnimatePresence exitBeforeEnter={!multipleToasts}>{children}</AnimatePresence>
              )}
              name={name ?? 'default'}
            />
          </ToastViewportFrame>
        </Collection.Slot>
        {hasToasts && (
          <FocusProxy
            __scopeToast={__scopeToast}
            viewportName={name}
            ref={tailFocusProxyRef}
            onFocusFromOutsideViewport={() => {
              const tabbableCandidates = getSortedTabbableCandidates({
                tabbingDirection: 'backwards',
              });
              focusFirst(tabbableCandidates);
            }}
          />
        )}
      </ToastViewportWrapperFrame>
    );

    if (portalToRoot) {
      return (
        <ToastPortal {...(typeof zIndex === 'number' ? { zIndex } : {})}>{contents}</ToastPortal>
      );
    }

    return contents;
  }),
);

ToastViewport.displayName = TOAST_VIEWPORT_NAME;

/* -----------------------------------------------------------------------------------------------*/

function focusFirst(candidates: TamaguiElement[]) {
  if (!isWeb) return;
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    // if focus is already where we want to go, we don't want to keep going through the candidates
    if (candidate === previouslyFocusedElement) return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}

/**
 * Returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */
function getTabbableCandidates(container: TamaguiElement) {
  if (!isWeb) return [];
  const containerHtml = container as HTMLElement;
  const nodes: HTMLElement[] = [];
  const walker = document.createTreeWalker(containerHtml, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node: HTMLInputElement) => {
      const isHiddenInput = node.tagName === 'INPUT' && node.type === 'hidden';
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      // `.tabIndex` is not the same as the `tabindex` attribute. It works on the
      // runtime's understanding of tabbability, so this automatically accounts
      // for any kind of element that could be tabbed to.
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    },
  });
  while (walker.nextNode()) nodes.push(walker.currentNode as HTMLElement);
  // we do not take into account the order of nodes with positive `tabIndex` as it
  // hinders accessibility to have tab order different from visual order.
  return nodes;
}

export { ToastViewport };
