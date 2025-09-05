/* forked from @tamagui/dialog */
/* https://github.com/tamagui/tamagui/tree/main/code/ui/dialog */

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable max-lines */
import {
  Adapt,
  AdaptParent,
  AdaptPortalContents,
  ProvideAdaptContext,
  useAdaptContext,
  useAdaptIsActive,
} from '@tamagui/adapt';
import { AnimatePresence } from '@tamagui/animate-presence';
import {
  composeEventHandlers,
  composeRefs,
  getExpandedShorthand,
  isAndroid,
  isIos,
  isWeb,
  Theme,
  useComposedRefs,
  useIsomorphicLayoutEffect,
  useThemeName,
  withStaticProperties,
} from '@tamagui/core';
import { Dismissable } from '@tamagui/dismissable';
import { FocusScope } from '@tamagui/focus-scope';
import { Portal, PortalItem, resolveViewZIndex, USE_NATIVE_PORTAL } from '@tamagui/portal';
import { RemoveScroll } from '@tamagui/remove-scroll';
import { useControllableState } from '@tamagui/use-controllable-state';
import { StackZIndexContext } from '@tamagui/z-index-stack';
import { DIALOG_DESCRIPTION_WARNING_NAME, DIALOG_TITLE_WARNING_NAME } from '@xsolla-zk/constants';
import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Sheet } from '../sheet/sheet';
import { SheetController } from '../sheet/sheet-controller';
import { DialogProvider, useDialogContext, useWarningContext } from './dialog.context';
import {
  DialogBodyFrame,
  DialogCloseFrame,
  DialogContentFrame,
  DialogDescriptionFrame,
  DialogFooterFrame,
  DialogHeaderFrame,
  DialogOverlayFrame,
  DialogPortalFrame,
  DialogTitleFrame,
  DialogTriggerFrame,
} from './dialog.styled';
import type {
  DescriptionWarningProps,
  DialogBodyProps,
  DialogCloseProps,
  DialogContentImplProps,
  DialogContentProps,
  DialogContentTypeProps,
  DialogContextValue,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogOverlayProps,
  DialogPortalProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps,
  TitleWarningProps,
} from './dialog.types';
import type { ScopedProps, TamaguiElement, ViewProps } from '@tamagui/core';
import type { Dispatch, PropsWithChildren, ReactNode, SetStateAction } from 'react';

const PassthroughTheme = ({
  children,
  passThrough,
}: PropsWithChildren<{ passThrough?: boolean }>) => {
  const themeName = useThemeName();

  return (
    <Theme passThrough={passThrough} name={themeName} forceClassName>
      {children}
    </Theme>
  );
};

/* -----------------------------------------------------------------------------------------------*/

const DialogTrigger = DialogTriggerFrame.styleable<DialogTriggerProps>(
  (props: ScopedProps<DialogTriggerProps>, forwardedRef) => {
    const { scope, ...triggerProps } = props;
    // const isInsideButton = useContext(ButtonNestingContext)
    const context = useDialogContext(scope);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return (
      // <ButtonNestingContext.Provider value={true}>
      <DialogTriggerFrame
        // tag={isInsideButton ? 'span' : 'button'}
        aria-haspopup="dialog"
        aria-expanded={context.open}
        aria-controls={context.contentId}
        data-state={getState(context.open)}
        {...triggerProps}
        ref={composedTriggerRef}
        onPress={composeEventHandlers(props.onPress, context.onOpenToggle)}
      />
      // {/* </ButtonNestingContext.Provider> */}
    );
  },
);

/* -----------------------------------------------------------------------------------------------*/

const needsRepropagation = isAndroid || (isIos && !USE_NATIVE_PORTAL);

const DialogPortalItem = ({
  context,
  children,
}: ScopedProps<DialogPortalProps & { context: DialogContextValue }>) => {
  const themeName = useThemeName();
  const isAdapted = useAdaptIsActive(context.adaptScope);
  const adaptContext = useAdaptContext(context.adaptScope);

  let content = <Theme name={themeName}>{children}</Theme>;

  // not just adapted - both sheet and portal for modal need it
  if (needsRepropagation) {
    content = (
      <ProvideAdaptContext {...adaptContext}>
        <DialogProvider {...context}>{content}</DialogProvider>
      </ProvideAdaptContext>
    );
  }

  // until we can use react-native portals natively
  // have to re-propogate context, sketch
  // when adapted we portal to the adapt, when not we portal to root modal if needed
  return isAdapted ? (
    <AdaptPortalContents scope={context.adaptScope}>{content}</AdaptPortalContents>
  ) : context.modal ? (
    <PortalItem hostName={context.modal ? 'root' : context.adaptScope}>{content}</PortalItem>
  ) : (
    content
  );
};

/* -----------------------------------------------------------------------------------------------*/

const DialogPortal = forwardRef<TamaguiElement, DialogPortalProps>(
  (props: ScopedProps<DialogPortalProps>, forwardRef) => {
    const { scope, forceMount, children, ...frameProps } = props;
    const dialogRef = useRef<TamaguiElement>(null);
    const ref = composeRefs(dialogRef, forwardRef);

    const context = useDialogContext(scope);
    const isMountedOrOpen = forceMount || context.open;
    const [isFullyHidden, setIsFullyHidden] = useState(!isMountedOrOpen);
    const isAdapted = useAdaptIsActive(context.adaptScope);
    const isVisible = isMountedOrOpen ? true : !isFullyHidden;

    if (isMountedOrOpen && isFullyHidden) {
      setIsFullyHidden(false);
    }

    if (isWeb) {
      useIsomorphicLayoutEffect(() => {
        const node = dialogRef.current;
        if (!(node instanceof HTMLDialogElement)) return;
        if (isVisible) {
          // not showModal because then we need to handle Select and Popover inside dialog
          // we can do that later in v2
          node.show();
        } else {
          node.close();
        }
      }, [isVisible]);
    }

    const handleExitComplete = useCallback(() => {
      setIsFullyHidden(true);
    }, []);

    const zIndex = getExpandedShorthand('zIndex', props) as ViewProps['zIndex'];

    const contents = (
      <StackZIndexContext zIndex={resolveViewZIndex(zIndex) as number}>
        <AnimatePresence passThrough={isAdapted} onExitComplete={handleExitComplete}>
          {isMountedOrOpen || isAdapted ? children : null}
        </AnimatePresence>
      </StackZIndexContext>
    );

    if (isFullyHidden && !isAdapted) {
      return null;
    }

    const framedContents = (
      <DialogPortalFrame
        ref={ref}
        {...(isWeb &&
          isMountedOrOpen && {
            'aria-modal': true,
          })}
        // passThrough={isAdapted}
        pointerEvents={isMountedOrOpen ? 'auto' : 'none'}
        {...frameProps}
        className={`_no_backdrop ` + (frameProps.className || '')}
      >
        {contents}
      </DialogPortalFrame>
    );

    if (isWeb) {
      return (
        <Portal
          zIndex={zIndex as number}
          // set to 1000 which "boosts" it 1000 above baseline for current context
          // this makes sure its above (this first 1k) popovers on the same layer
          stackZIndex={1000}
          passThrough={isAdapted}
        >
          <PassthroughTheme passThrough={isAdapted}>{framedContents}</PassthroughTheme>
        </Portal>
      );
    }

    return isAdapted ? (
      framedContents
    ) : (
      <DialogPortalItem context={context}>{framedContents}</DialogPortalItem>
    );
  },
);

/* -----------------------------------------------------------------------------------------------*/

const DialogOverlay = DialogOverlayFrame.styleable<DialogOverlayProps>(function DialogOverlay(
  { scope, ...props }: ScopedProps<DialogOverlayProps>,
  forwardedRef,
) {
  const context = useDialogContext(scope);
  const { forceMount = context.forceMount, ...overlayProps } = props;
  const isAdapted = useAdaptIsActive(context.adaptScope);

  if (!forceMount) {
    if (!context.modal || isAdapted) {
      return null;
    }
  }

  // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
  // ie. when `Overlay` and `Content` are siblings
  return (
    <DialogOverlayFrame
      data-state={getState(context.open)}
      // TODO: this will be apply for v2
      // onPress={() => {
      //   // if the overlay is pressed, close the dialog
      //   context.onOpenChange(false)
      // }}
      // We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
      pointerEvents={context.open ? 'auto' : 'none'}
      {...overlayProps}
      ref={forwardedRef}
    />
  );
});

/* -----------------------------------------------------------------------------------------------*/

const TitleWarning = ({ titleId }: TitleWarningProps) => {
  if (process.env.NODE_ENV === 'development') {
    const titleWarningContext = useWarningContext(DIALOG_TITLE_WARNING_NAME);

    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.`;

    useEffect(() => {
      if (!isWeb) return;
      if (titleId) {
        const hasTitle = document.getElementById(titleId);
        if (!hasTitle) {
          console.warn(MESSAGE);
        }
      }
    }, [MESSAGE, titleId]);
  }

  return null;
};

/* -----------------------------------------------------------------------------------------------*/

const DescriptionWarning = ({ contentRef, descriptionId }: DescriptionWarningProps) => {
  if (process.env.NODE_ENV === 'development') {
    const descriptionWarningContext = useWarningContext(DIALOG_DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;

    useEffect(() => {
      if (!isWeb) return;
      const contentNode = contentRef.current;
      if (!(contentNode instanceof HTMLElement)) {
        return;
      }
      const describedById = contentNode.getAttribute('aria-describedby');
      // if we have an id and the user hasn't set aria-describedby={undefined}
      if (descriptionId && describedById) {
        const hasDescription = document.getElementById(descriptionId);
        if (!hasDescription) {
          console.warn(MESSAGE);
        }
      }
    }, [MESSAGE, contentRef, descriptionId]);
  }

  return null;
};

/* -----------------------------------------------------------------------------------------------*/

const DialogContentImpl = forwardRef<TamaguiElement, DialogContentImplProps>(
  (props, forwardedRef) => {
    const {
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      context,
      ...contentProps
    } = props;

    const contentRef = useRef<TamaguiElement>(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const isAdapted = useAdaptIsActive(context.adaptScope);

    // TODO this will re-parent, ideally we would not change tree structure

    if (isAdapted) {
      if (!isWeb && !context.open) {
        return null;
      }

      return <DialogPortalItem context={context}>{contentProps.children}</DialogPortalItem>;
    }

    const contents = (
      <DialogContentFrame
        ref={composedRefs}
        id={context.contentId}
        aria-describedby={context.descriptionId}
        aria-labelledby={context.titleId}
        data-state={getState(context.open)}
        size={context.size}
        {...contentProps}
      />
    );

    if (!isWeb) {
      return contents;
    }

    return (
      <>
        <Dismissable
          disableOutsidePointerEvents={context.open && disableOutsidePointerEvents}
          forceUnmount={!context.open}
          onEscapeKeyDown={onEscapeKeyDown}
          onPointerDownOutside={onPointerDownOutside}
          onFocusOutside={onFocusOutside}
          onInteractOutside={onInteractOutside}
          onDismiss={() => context?.onOpenChange?.(false)}
        >
          <FocusScope
            loop
            enabled={context.open}
            trapped={trapFocus}
            onMountAutoFocus={onOpenAutoFocus}
            forceUnmount={!context.open}
            onUnmountAutoFocus={onCloseAutoFocus}
          >
            {contents}
          </FocusScope>
        </Dismissable>
        {process.env.NODE_ENV === 'development' && (
          <>
            <TitleWarning titleId={context.titleId} />
            <DescriptionWarning contentRef={contentRef} descriptionId={context.descriptionId} />
          </>
        )}
      </>
    );
  },
);

/* -----------------------------------------------------------------------------------------------*/

const DialogContentModal = forwardRef<TamaguiElement, DialogContentTypeProps>(
  ({ children, context, ...props }, forwardedRef) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);

    return (
      <DialogContentImpl
        {...props}
        context={context}
        ref={composedRefs}
        // we make sure focus isn't trapped once `DialogContent` has been closed
        // (closed !== unmounted when animating out)
        trapFocus={context.open}
        disableOutsidePointerEvents
        onCloseAutoFocus={composeEventHandlers(props.onCloseAutoFocus, (event) => {
          event.preventDefault();
          context.triggerRef.current?.focus();
        })}
        onPointerDownOutside={composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event['detail'].originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          // If the event is a right-click, we shouldn't close because
          // it is effectively as if we right-clicked the `Overlay`.
          if (isRightClick) event.preventDefault();
        })}
        // When focus is trapped, a `focusout` event may still happen.
        // We make sure we don't trigger our `onDismiss` in such case.
        onFocusOutside={composeEventHandlers(props.onFocusOutside, (event) =>
          event.preventDefault(),
        )}
      >
        {children}
      </DialogContentImpl>
    );
  },
);

/* -----------------------------------------------------------------------------------------------*/

const DialogContentNonModal = forwardRef<TamaguiElement, DialogContentTypeProps>(
  (props, forwardedRef) => {
    const hasInteractedOutsideRef = useRef(false);

    return (
      <DialogContentImpl
        {...props}
        ref={forwardedRef}
        trapFocus={false}
        disableOutsidePointerEvents={false}
        onCloseAutoFocus={(event) => {
          props.onCloseAutoFocus?.(event);

          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) {
              props.context.triggerRef.current?.focus();
            }
            // Always prevent auto focus because we either focus manually or want user agent focus
            event.preventDefault();
          }

          hasInteractedOutsideRef.current = false;
        }}
        onInteractOutside={(event) => {
          props.onInteractOutside?.(event);

          if (!event.defaultPrevented) hasInteractedOutsideRef.current = true;

          // Prevent dismissing when clicking the trigger.
          // As the trigger is already setup to close, without doing so would
          // cause it to close and immediately open.
          //
          // We use `onInteractOutside` as some browsers also
          // focus on pointer down, creating the same issue.
          const target = event.target as HTMLElement;
          const trigger = props.context.triggerRef.current;
          if (!(trigger instanceof HTMLElement)) return;
          const targetIsTrigger = trigger.contains(target);
          if (targetIsTrigger) event.preventDefault();
        }}
      />
    );
  },
);

const DialogContent = DialogContentFrame.styleable<DialogContentProps>(
  ({ scope, ...props }: ScopedProps<DialogContentProps>, forwardedRef) => {
    const context = useDialogContext(scope);
    const { forceMount = context.forceMount, ...contentProps } = props;

    const contents = (
      <>
        {context.modal ? (
          <DialogContentModal context={context} {...contentProps} ref={forwardedRef} />
        ) : (
          <DialogContentNonModal context={context} {...contentProps} ref={forwardedRef} />
        )}
      </>
    );

    if (!isWeb || context.disableRemoveScroll) {
      return contents;
    }

    return (
      <RemoveScroll enabled={context.open}>
        <div data-remove-scroll-container className="_dsp_contents">
          {contents}
        </div>
      </RemoveScroll>
    );
  },
);

/* -----------------------------------------------------------------------------------------------*/

const DialogTitle = DialogTitleFrame.styleable<DialogTitleProps>(function DialogTitle(
  props: ScopedProps<DialogTitleProps>,
  forwardedRef,
) {
  const { scope, ...titleProps } = props;
  const context = useDialogContext(scope);
  return <DialogTitleFrame id={context.titleId} {...titleProps} ref={forwardedRef} />;
});

/* -----------------------------------------------------------------------------------------------*/

const DialogDescription = DialogDescriptionFrame.styleable<DialogDescriptionProps>(
  function DialogDescription(props: ScopedProps<DialogDescriptionProps>, forwardedRef) {
    const { scope, ...descriptionProps } = props;
    const context = useDialogContext(scope);
    return (
      <DialogDescriptionFrame id={context.descriptionId} {...descriptionProps} ref={forwardedRef} />
    );
  },
);

const DialogClose = DialogCloseFrame.styleable<DialogCloseProps>(
  (props: ScopedProps<DialogCloseProps>, forwardedRef) => {
    const { scope, displayWhenAdapted, ...closeProps } = props;
    const context = useDialogContext(scope);
    const isAdapted = useAdaptIsActive(context.adaptScope);
    // const isInsideButton = React.useContext(ButtonNestingContext);

    if (isAdapted && !displayWhenAdapted) {
      return null;
    }

    return (
      <DialogCloseFrame
        aria-label="Dialog Close"
        // tag={isInsideButton ? 'span' : 'button'}
        {...closeProps}
        ref={forwardedRef}
        onPress={composeEventHandlers(props.onPress, () => {
          context.onOpenChange(false);
        })}
      />
    );
  },
);

function getState(open: boolean) {
  return open ? 'open' : 'closed';
}

const DialogSheetController = (
  props: ScopedProps<{
    children: ReactNode;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
  }>,
) => {
  const context = useDialogContext(props.scope);
  const isAdapted = useAdaptIsActive(context.adaptScope);

  return (
    <SheetController
      onOpenChange={(val: boolean) => {
        if (isAdapted) {
          props.onOpenChange?.(val);
        }
      }}
      open={context.open}
      hidden={!isAdapted}
    >
      {props.children}
    </SheetController>
  );
};

const DialogHeader = DialogHeaderFrame.styleable<DialogHeaderProps>(
  (props: ScopedProps<DialogHeaderProps>, forwardedRef) => {
    const { scope, ...headerProps } = props;
    const context = useDialogContext(scope);
    return <DialogHeaderFrame size={context.size} {...headerProps} ref={forwardedRef} />;
  },
);

const DialogBody = DialogBodyFrame.styleable<DialogBodyProps>(
  (props: ScopedProps<DialogBodyProps>, forwardedRef) => {
    const { scope, ...bodyProps } = props;
    const context = useDialogContext(scope);
    return <DialogBodyFrame size={context.size} {...bodyProps} ref={forwardedRef} />;
  },
);

const DialogFooter = DialogFooterFrame.styleable<DialogFooterProps>(
  (props: ScopedProps<DialogFooterProps>, forwardedRef) => {
    const { scope, ...footerProps } = props;
    const context = useDialogContext(scope);
    return <DialogFooterFrame size={context.size} {...footerProps} ref={forwardedRef} />;
  },
);

/* -------------------------------------------------------------------------------------------------
 * Dialog
 * -----------------------------------------------------------------------------------------------*/

export const Dialog = withStaticProperties(
  forwardRef<{ open: (val: boolean) => void }, DialogProps>(
    (props: ScopedProps<DialogProps>, ref) => {
      const {
        scope = '',
        children,
        open: openProp,
        defaultOpen = false,
        onOpenChange,
        modal = true,
        disableRemoveScroll = false,
        size = '$500',
      } = props;

      const baseId = useId();
      const dialogId = `Dialog-${scope}-${baseId}`;
      const contentId = `${dialogId}-content`;
      const titleId = `${dialogId}-title`;
      const descriptionId = `${dialogId}-description`;

      const triggerRef = useRef<TamaguiElement>(null);
      const contentRef = useRef<TamaguiElement>(null);

      const [open, setOpen] = useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange,
      });

      const onOpenToggle = useCallback(() => {
        setOpen((prevOpen) => !prevOpen);
      }, [setOpen]);

      const adaptScope = `DialogAdapt${scope}`;

      const context = {
        dialogScope: scope,
        adaptScope,
        triggerRef,
        contentRef,
        contentId,
        titleId,
        descriptionId,
        open,
        onOpenChange: setOpen,
        onOpenToggle,
        modal,
        disableRemoveScroll,
        size,
      } satisfies DialogContextValue;

      useImperativeHandle(
        ref,
        () => ({
          open: setOpen,
        }),
        [setOpen],
      );

      return (
        <AdaptParent
          scope={adaptScope}
          portal={{
            forwardProps: props,
          }}
        >
          <DialogProvider scope={scope} {...context}>
            <DialogSheetController onOpenChange={setOpen} scope={scope}>
              {children}
            </DialogSheetController>
          </DialogProvider>
        </AdaptParent>
      );
    },
  ),
  {
    Header: DialogHeader,
    Body: DialogBody,
    Footer: DialogFooter,
    Trigger: DialogTrigger,
    Portal: DialogPortal,
    Overlay: DialogOverlay,
    Content: DialogContent,
    Title: DialogTitle,
    Description: DialogDescription,
    Close: DialogClose,
    Sheet: Sheet.Controlled,
    Adapt,
  },
);
