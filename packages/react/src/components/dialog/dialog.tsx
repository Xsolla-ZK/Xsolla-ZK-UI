/* forked from @tamagui/dialog */
/* https://github.com/tamagui/tamagui/tree/main/code/ui/dialog */

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable max-lines */
import { Adapt, AdaptParent, AdaptPortalContents, useAdaptIsActive } from '@tamagui/adapt';
import { AnimatePresence } from '@tamagui/animate-presence';
import { hideOthers } from '@tamagui/aria-hidden';
import {
  composeEventHandlers,
  getExpandedShorthand,
  isWeb,
  Theme,
  useComposedRefs,
  useThemeName,
  View,
  withStaticProperties,
} from '@tamagui/core';
import { Dismissable } from '@tamagui/dismissable';
import { FocusScope } from '@tamagui/focus-scope';
import { Portal, PortalItem, resolveViewZIndex } from '@tamagui/portal';
import { RemoveScroll } from '@tamagui/remove-scroll';
import { useControllableState } from '@tamagui/use-controllable-state';
import { StackZIndexContext } from '@tamagui/z-index-stack';
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
import {
  DIALOG_BODY_COMPONENT_NAME,
  DIALOG_CLOSE_COMPONENT_NAME,
  DIALOG_CONTENT_COMPONENT_NAME,
  DIALOG_DESCRIPTION_COMPONENT_NAME,
  DIALOG_DESCRIPTION_WARNING_NAME,
  DIALOG_FOOTER_COMPONENT_NAME,
  DIALOG_HEADER_COMPONENT_NAME,
  DIALOG_OVERLAY_COMPONENT_NAME,
  DIALOG_PORTAL_COMPONENT_NAME,
  DIALOG_SHEET_CONTROLLER_COMPONENT_NAME,
  DIALOG_TITLE_COMPONENT_NAME,
  DIALOG_TITLE_WARNING_NAME,
  DIALOG_TRIGGER_COMPONENT_NAME,
} from './dialog.constants';
import {
  DialogProvider,
  PortalProvider,
  useDialogContext,
  usePortalContext,
  useWarningContext,
} from './dialog.context';
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
  DialogCloseExtraProps,
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
  DialogScopedProps,
  DialogTitleProps,
  DialogTriggerProps,
  TitleWarningProps,
} from './dialog.types';
import type { TamaguiElement, ViewProps } from '@tamagui/core';
import type { Scope } from '@tamagui/create-context';
import type { Dispatch, ForwardedRef, PropsWithChildren, ReactNode, SetStateAction } from 'react';

const PassthroughTheme = ({ children }: PropsWithChildren) => {
  const themeName = useThemeName();

  return (
    <Theme name={themeName} forceClassName>
      {children}
    </Theme>
  );
};

/* -----------------------------------------------------------------------------------------------*/

const DialogTrigger = DialogTriggerFrame.styleable(
  forwardRef(
    (props: DialogScopedProps<DialogTriggerProps>, forwardedRef: ForwardedRef<TamaguiElement>) => {
      const { __scopeDialog, ...triggerProps } = props;
      const context = useDialogContext(DIALOG_TRIGGER_COMPONENT_NAME, __scopeDialog);
      const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
      return (
        <DialogTriggerFrame
          aria-haspopup="dialog"
          aria-expanded={context.open}
          aria-controls={context.contentId}
          data-state={getState(context.open)}
          {...triggerProps}
          ref={composedTriggerRef}
          onPress={composeEventHandlers(props.onPress, context.onOpenToggle)}
        />
      );
    },
  ),
);

/* -----------------------------------------------------------------------------------------------*/

const DialogPortalItem = (props: DialogScopedProps<DialogPortalProps>) => {
  const { __scopeDialog, children } = props;

  const themeName = useThemeName();
  const context = useDialogContext(DIALOG_PORTAL_COMPONENT_NAME, __scopeDialog);
  const isAdapted = useAdaptIsActive();

  const content = (
    <DialogProvider scope={__scopeDialog} {...context}>
      <Theme name={themeName}>{children}</Theme>
    </DialogProvider>
  );

  // until we can use react-native portals natively
  // have to re-propogate context, sketch
  // when adapted we portal to the adapt, when not we portal to root modal if needed
  return isAdapted ? (
    <AdaptPortalContents>{content}</AdaptPortalContents>
  ) : context.modal ? (
    <PortalItem hostName={context.modal ? 'root' : context.adaptName}>{content}</PortalItem>
  ) : (
    content
  );
};

/* -----------------------------------------------------------------------------------------------*/

const DialogPortal = (props: DialogScopedProps<DialogPortalProps>) => {
  const { __scopeDialog, forceMount, children, ...frameProps } = props;

  const context = useDialogContext(DIALOG_PORTAL_COMPONENT_NAME, __scopeDialog);
  const isShowing = forceMount || context.open;
  const [isFullyHidden, setIsFullyHidden] = useState(!isShowing);
  const isAdapted = useAdaptIsActive();

  if (isShowing && isFullyHidden) {
    setIsFullyHidden(false);
  }

  const handleExitComplete = useCallback(() => {
    setIsFullyHidden(true);
  }, []);

  const zIndex = getExpandedShorthand('zIndex', props) as ViewProps['zIndex'];

  const contents = (
    <StackZIndexContext zIndex={resolveViewZIndex(zIndex) as number}>
      <AnimatePresence onExitComplete={handleExitComplete}>
        {isShowing || isAdapted ? children : null}
      </AnimatePresence>
    </StackZIndexContext>
  );

  if (isFullyHidden && !isAdapted) {
    return null;
  }

  const framedContents = (
    <PortalProvider scope={__scopeDialog} forceMount={forceMount}>
      <DialogPortalFrame pointerEvents={isShowing ? 'auto' : 'none'} {...frameProps}>
        {contents}
      </DialogPortalFrame>
    </PortalProvider>
  );

  if (isWeb) {
    return (
      <Portal
        zIndex={zIndex}
        // set to 1000 which "boosts" it 1000 above baseline for current context
        // this makes sure its above (this first 1k) popovers on the same layer
        stackZIndex={1000}
      >
        <PassthroughTheme>{framedContents}</PassthroughTheme>
      </Portal>
    );
  }

  return isAdapted ? (
    framedContents
  ) : (
    <DialogPortalItem __scopeDialog={__scopeDialog}>{framedContents}</DialogPortalItem>
  );
};

/* -----------------------------------------------------------------------------------------------*/

const DialogOverlay = DialogOverlayFrame.styleable(
  forwardRef<TamaguiElement, DialogOverlayProps>(
    ({ __scopeDialog, ...props }: DialogScopedProps<DialogOverlayProps>, forwardedRef) => {
      const portalContext = usePortalContext(DIALOG_OVERLAY_COMPONENT_NAME, __scopeDialog);
      const { forceMount = portalContext.forceMount, ...overlayProps } = props;
      const context = useDialogContext(DIALOG_OVERLAY_COMPONENT_NAME, __scopeDialog);
      const isAdapted = useAdaptIsActive();

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
    },
  ),
);

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
  (props: DialogScopedProps<DialogContentImplProps>, forwardedRef) => {
    const {
      __scopeDialog,
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
    const isAdapted = useAdaptIsActive();

    // TODO this will re-parent, ideally we would not change tree structure

    if (isAdapted) {
      if (!isWeb && !context.open) {
        return null;
      }

      return <DialogPortalItem>{contentProps.children}</DialogPortalItem>;
    }

    const contents = (
      <DialogContentFrame
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
          // @ts-ignore: TamaguiElement it's ok here
          ref={composedRefs}
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
  ({ children, context, ...props }: DialogScopedProps<DialogContentTypeProps>, forwardedRef) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);

    // aria-hide everything except the content (better supported equivalent to setting aria-modal)
    useEffect(() => {
      if (!isWeb) return;
      if (!context.open) return;
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, [context.open]);

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
  (props: DialogScopedProps<DialogContentTypeProps>, forwardedRef) => {
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

const DialogContent = DialogContentFrame.styleable(
  forwardRef<TamaguiElement, DialogContentProps>(
    ({ __scopeDialog, ...props }: DialogScopedProps<DialogContentProps>, forwardedRef) => {
      const portalContext = usePortalContext(DIALOG_CONTENT_COMPONENT_NAME, __scopeDialog);
      const { forceMount = portalContext.forceMount, ...contentProps } = props;
      const context = useDialogContext(DIALOG_CONTENT_COMPONENT_NAME, __scopeDialog);

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
        <RemoveScroll
          forwardProps
          enabled={context.open}
          allowPinchZoom={context.allowPinchZoom}
          shards={[context.contentRef]}
          // causes lots of bugs on touch web on site
          removeScrollBar={false}
        >
          <View data-remove-scroll-container className="_dsp_contents">
            {contents}
          </View>
        </RemoveScroll>
      );
    },
  ),
);

/* -----------------------------------------------------------------------------------------------*/

const DialogTitle = DialogTitleFrame.styleable(
  forwardRef<TamaguiElement, DialogTitleProps>(
    (props: DialogScopedProps<DialogTitleProps>, forwardedRef) => {
      const { __scopeDialog, ...titleProps } = props;
      const context = useDialogContext(DIALOG_TITLE_COMPONENT_NAME, __scopeDialog);
      return <DialogTitleFrame id={context.titleId} {...titleProps} ref={forwardedRef} />;
    },
  ),
);

/* -----------------------------------------------------------------------------------------------*/

const DialogDescription = DialogDescriptionFrame.styleable(
  forwardRef<TamaguiElement, DialogDescriptionProps>(
    (props: DialogScopedProps<DialogDescriptionProps>, forwardedRef) => {
      const { __scopeDialog, ...descriptionProps } = props;
      const context = useDialogContext(DIALOG_DESCRIPTION_COMPONENT_NAME, __scopeDialog);
      return (
        <DialogDescriptionFrame
          id={context.descriptionId}
          {...descriptionProps}
          ref={forwardedRef}
        />
      );
    },
  ),
);

const DialogClose = DialogCloseFrame.styleable<DialogCloseExtraProps>(
  forwardRef(
    (props: DialogScopedProps<DialogCloseProps>, forwardedRef: ForwardedRef<TamaguiElement>) => {
      const { __scopeDialog, displayWhenAdapted, ...closeProps } = props;
      const context = useDialogContext(DIALOG_CLOSE_COMPONENT_NAME, __scopeDialog, {
        warn: false,
        fallback: {},
      });
      const isAdapted = useAdaptIsActive();

      if (isAdapted && !displayWhenAdapted) {
        return null;
      }

      return (
        <DialogCloseFrame
          aria-label="Dialog Close"
          {...closeProps}
          ref={forwardedRef}
          onPress={composeEventHandlers(props.onPress, () => {
            context.onOpenChange(false);
          })}
        />
      );
    },
  ),
);

function getState(open: boolean) {
  return open ? 'open' : 'closed';
}

function getAdaptName({ scopeKey, contentId }: Pick<DialogContextValue, 'scopeKey' | 'contentId'>) {
  return `${scopeKey || contentId}DialogAdapt`;
}

const DialogSheetController = (
  props: DialogScopedProps<{
    children: ReactNode;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
  }>,
) => {
  const context = useDialogContext(DIALOG_SHEET_CONTROLLER_COMPONENT_NAME, props.__scopeDialog);
  const isAdapted = useAdaptIsActive();

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

const DialogHeader = DialogHeaderFrame.styleable(
  forwardRef<TamaguiElement, DialogHeaderProps>(
    (props: DialogScopedProps<DialogHeaderProps>, forwardedRef) => {
      const { __scopeDialog, ...headerProps } = props;
      const context = useDialogContext(DIALOG_HEADER_COMPONENT_NAME, __scopeDialog);
      return <DialogHeaderFrame size={context.size} {...headerProps} ref={forwardedRef} />;
    },
  ),
);

const DialogBody = DialogBodyFrame.styleable(
  forwardRef<TamaguiElement, DialogBodyProps>(
    (props: DialogScopedProps<DialogBodyProps>, forwardedRef) => {
      const { __scopeDialog, ...bodyProps } = props;
      const context = useDialogContext(DIALOG_BODY_COMPONENT_NAME, __scopeDialog);
      return <DialogBodyFrame size={context.size} {...bodyProps} ref={forwardedRef} />;
    },
  ),
);

const DialogFooter = DialogFooterFrame.styleable(
  forwardRef<TamaguiElement, DialogFooterProps>(
    (props: DialogScopedProps<DialogFooterProps>, forwardedRef) => {
      const { __scopeDialog, ...footerProps } = props;
      const context = useDialogContext(DIALOG_FOOTER_COMPONENT_NAME, __scopeDialog);
      return <DialogFooterFrame size={context.size} {...footerProps} ref={forwardedRef} />;
    },
  ),
);

/* -------------------------------------------------------------------------------------------------
 * Dialog
 * -----------------------------------------------------------------------------------------------*/

export const Dialog = withStaticProperties(
  forwardRef<{ open: (val: boolean) => void }, DialogProps>(
    (props: DialogScopedProps<DialogProps>, ref) => {
      const {
        __scopeDialog,
        children,
        open: openProp,
        defaultOpen = false,
        onOpenChange,
        modal = true,
        allowPinchZoom = false,
        disableRemoveScroll = false,
        size = '$500',
      } = props;

      const baseId = useId();
      const scopeId = `scope-${baseId}`;
      const contentId = `content-${baseId}`;
      const titleId = `title-${baseId}`;
      const descriptionId = `description-${baseId}`;
      const scopeKey = __scopeDialog ? Object.keys(__scopeDialog)[0] : scopeId;
      const adaptName = getAdaptName({ scopeKey, contentId });
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

      const context = {
        scope: __scopeDialog,
        scopeKey,
        triggerRef,
        contentRef,
        contentId,
        titleId,
        descriptionId,
        open,
        onOpenChange: setOpen,
        onOpenToggle,
        modal,
        allowPinchZoom,
        disableRemoveScroll,
        adaptName,
        size,
      } satisfies DialogContextValue & { scope?: Scope };

      useImperativeHandle(
        ref,
        () => ({
          open: setOpen,
        }),
        [setOpen],
      );

      return (
        <AdaptParent
          scope={adaptName}
          portal={{
            forwardProps: props,
          }}
        >
          <DialogProvider {...context}>
            <DialogSheetController onOpenChange={setOpen} __scopeDialog={__scopeDialog}>
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
