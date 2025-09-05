/* rework tamagui implementation of Dropdown component - @tamagui/popover based
/* https://github.com/tamagui/tamagui/tree/main/code/ui/popover */

/* eslint-disable max-lines */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Adapt,
  AdaptParent,
  AdaptPortalContents,
  ProvideAdaptContext,
  useAdaptContext,
  useAdaptIsActive,
} from '@tamagui/adapt';
import { Animate } from '@tamagui/animate';
import { ResetPresence } from '@tamagui/animate-presence';
import {
  composeEventHandlers,
  isAndroid,
  isIos,
  isWeb,
  Stack,
  Theme,
  useComposedRefs,
  useCreateShallowSetState,
  useEvent,
  useGet,
  useThemeName,
  View,
  withStaticProperties,
  type ScopedProps,
  type StackProps,
  type TamaguiElement,
} from '@tamagui/core';
import { FloatingOverrideContext } from '@tamagui/floating';
import { FocusScope, FocusScopeController } from '@tamagui/focus-scope';
import { Portal, resolveViewZIndex, USE_NATIVE_PORTAL } from '@tamagui/portal';
import { RemoveScroll } from '@tamagui/remove-scroll';
import { ScrollView } from '@tamagui/scroll-view';
import { useControllableState } from '@tamagui/use-controllable-state';
import { StackZIndexContext } from '@tamagui/z-index-stack';
import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useExtractedProps } from '../../hooks';
import { Popper, PopperAnchor, PopperContent, PopperProvider } from '../popper';
import { usePopperContext } from '../popper/popper.context';
import { PopperContentFrame } from '../popper/popper.styled';
import { Sheet } from '../sheet';
import { SheetController } from '../sheet/sheet-controller';
import { DropdownContext, useDropdownContext } from './dropdown.context';
import { useFloatingContext } from './dropdown.hooks';
import { DropdownBodyContentFrame, DropdownBodyFrame } from './dropdown.styled';
import type {
  DropdownAnchorProps,
  DropdownBodyProps,
  DropdownContentImplElement,
  DropdownContentImplInteralProps,
  DropdownContentProps,
  DropdownContextValue,
  DropdownElement,
  DropdownProps,
  DropdownRect,
  DropdownTriggerProps,
  DropdownVia,
} from './dropdown.types';
import type { PopperArrowExtraProps } from '../popper/popper.types';
import type { CallbackSetState } from '@tamagui/core';
import type { ReferenceType, UseFloatingFn } from '@tamagui/floating';
import type { FocusScopeControllerProps } from '@tamagui/focus-scope';
import type { ScrollViewProps } from '@tamagui/scroll-view';
import type { ComponentType, Dispatch, ReactNode, RefObject, SetStateAction } from 'react';
import type { MeasureInWindowOnSuccessCallback } from 'react-native';

const needsRepropagation = isAndroid || (isIos && !USE_NATIVE_PORTAL);
const DEFAULT_SCOPE = '';

/* -------------------------------------------------------------------------------------------------
 * DropdownAnchor
 * -----------------------------------------------------------------------------------------------*/

export const DropdownAnchor = forwardRef<TamaguiElement, ScopedProps<DropdownAnchorProps>>(
  function DropdownAnchor(props, forwardedRef) {
    const { scope, ...rest } = props;
    const context = useDropdownContext(scope);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context || {};

    useEffect(() => {
      onCustomAnchorAdd();
      return () => onCustomAnchorRemove();
    }, [onCustomAnchorAdd, onCustomAnchorRemove]);

    return <PopperAnchor scope={scope} {...rest} ref={forwardedRef} />;
  },
);

/* -------------------------------------------------------------------------------------------------
 * DropdownTrigger
 * -----------------------------------------------------------------------------------------------*/

export const DropdownTrigger = forwardRef<TamaguiElement, ScopedProps<DropdownTriggerProps>>(
  function DropdownTrigger(props, forwardedRef) {
    const { scope, ...rest } = props;
    const context = useDropdownContext(scope);

    const anchorTo = context.anchorTo;
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);

    if (!props.children) {
      return null;
    }

    const trigger = (
      <View
        aria-expanded={context.open}
        // TODO not matching
        // aria-controls={context.contentId}
        data-state={getState(context.open)}
        {...rest}
        ref={composedTriggerRef}
        onPress={composeEventHandlers(props.onPress, context.onOpenToggle)}
      />
    );

    const virtualRef = useMemo(() => {
      if (!anchorTo) {
        return null;
      }
      return {
        current: {
          getBoundingClientRect: () => (isWeb ? DOMRect.fromRect(anchorTo) : anchorTo),
          ...(!isWeb && {
            measure: (c: MeasureInWindowOnSuccessCallback) =>
              c(anchorTo?.x, anchorTo?.y, anchorTo?.width, anchorTo?.height),
            measureInWindow: (c: MeasureInWindowOnSuccessCallback) =>
              c(anchorTo?.x, anchorTo?.y, anchorTo?.width, anchorTo?.height),
          }),
        },
      };
    }, [
      context.anchorTo,
      anchorTo?.x,
      anchorTo?.y,
      anchorTo?.x,
      anchorTo?.height,
      anchorTo?.width,
    ]);

    return context.hasCustomAnchor ? (
      trigger
    ) : (
      <PopperAnchor
        {...(virtualRef && { virtualRef: virtualRef as RefObject<ReferenceType> })}
        scope={scope}
        asChild={rest.asChild}
      >
        {trigger}
      </PopperAnchor>
    );
  },
);

/* -------------------------------------------------------------------------------------------------
 * DropdownContentImpl
 * -----------------------------------------------------------------------------------------------*/

const DropdownContentImpl = forwardRef<DropdownContentImplElement, DropdownContentImplInteralProps>(
  function DropdownContentImpl(props, forwardedRef) {
    const {
      trapFocus,
      scope,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      disableFocusScope,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      children,
      enableRemoveScroll,
      freezeContentsWhenHidden,
      setIsFullyHidden,
      lazyMount,
      context,
      ...contentProps
    } = props;

    const { open, keepChildrenMounted } = context;

    const handleExitComplete = useCallback(() => {
      setIsFullyHidden?.(true);
    }, [setIsFullyHidden]);

    let contents = <ResetPresence disable={context.breakpointActive}>{children}</ResetPresence>;

    // i want to avoid reparenting but react-remove-scroll makes it hard
    // TODO its removed now so we can probable do it now
    if (!context.breakpointActive) {
      if (process.env.TAMAGUI_TARGET !== 'native') {
        contents = (
          <RemoveScroll
            enabled={context.breakpointActive ? false : enableRemoveScroll ? open : false}
          >
            <FocusScope
              loop={trapFocus !== false}
              enabled={context.breakpointActive ? false : disableFocusScope ? false : open}
              trapped={context.breakpointActive ? false : trapFocus}
              onMountAutoFocus={onOpenAutoFocus}
              onUnmountAutoFocus={onCloseAutoFocus === false ? undefined : onCloseAutoFocus}
            >
              <div style={{ display: 'contents' }}>{contents}</div>
            </FocusScope>
          </RemoveScroll>
        );
      }
    }

    // const handleDismiss = React.useCallback((event: GestureResponderEvent) =>{
    //   context.onOpenChange(false);
    // }, [])
    // <Dismissable
    //     disableOutsidePointerEvents={disableOutsidePointerEvents}
    //     // onInteractOutside={onInteractOutside}
    //     onEscapeKeyDown={onEscapeKeyDown}
    //     // onPointerDownOutside={onPointerDownOutside}
    //     // onFocusOutside={onFocusOutside}
    //     onDismiss={handleDismiss}
    //   >

    // const freeze = Boolean(isFullyHidden && freezeContentsWhenHidden)

    return (
      <Animate
        type="presence"
        present={Boolean(open)}
        keepChildrenMounted={Boolean(keepChildrenMounted)}
        onExitComplete={handleExitComplete}
        lazyMount={lazyMount}
        passThrough={context.breakpointActive}
      >
        <PopperContent
          scope={scope}
          key={context.contentId}
          data-state={getState(open)}
          id={context.contentId}
          ref={forwardedRef}
          passThrough={context.breakpointActive}
          {...contentProps}
        >
          <PortalAdaptSafe context={context}>{contents}</PortalAdaptSafe>
        </PopperContent>
      </Animate>
    );
  },
);

/* -------------------------------------------------------------------------------------------------
 * DropdownClose
 * -----------------------------------------------------------------------------------------------*/
export const DropdownClose = forwardRef<TamaguiElement, StackProps>(function DropdownClose(
  props: ScopedProps<StackProps>,
  forwardedRef,
) {
  const { scope, ...rest } = props;
  const context = useDropdownContext(scope);
  return (
    <Stack
      {...rest}
      ref={forwardedRef}
      componentName="DropdownClose"
      onPress={composeEventHandlers(props.onPress, () => context?.onOpenChange?.(false, 'press'))}
    />
  );
});

/* -------------------------------------------------------------------------------------------------
 * DropdownArrow
 * -----------------------------------------------------------------------------------------------*/

// export const DropdownArrow = PopperArrowFrame.styleable<PopperArrowExtraProps>(
//   function DropdownArrow(props, forwardedRef) {
//     const { scope, ...rest } = props;
//     const context = useDropdownContext(scope);
//     const isAdapted = useAdaptIsActive(context.adaptScope);

//     if (isAdapted) {
//       return null;
//     }

//     return <PopperArrow scope={scope} componentName="DropdownArrow" {...rest} ref={forwardedRef} />;
//   },
// );

/* -------------------------------------------------------------------------------------------------
 * DropdownScrollView
 * -----------------------------------------------------------------------------------------------*/
const DropdownScrollView = forwardRef<ScrollView, ScrollViewProps>(
  ({ scope, ...props }: ScopedProps<ScrollViewProps>, ref) => {
    const context = useDropdownContext(scope);

    return (
      <ScrollView
        ref={ref}
        // when adapted, no pointer events!
        pointerEvents={context.breakpointActive ? 'none' : undefined}
        scrollEnabled={!context.breakpointActive}
        passThrough={context.breakpointActive}
        {...props}
      />
    );
  },
);

/* -------------------------------------------------------------------------------------------------
 * DropdownContent
 * -----------------------------------------------------------------------------------------------*/

export const DropdownContent = forwardRef<TamaguiElement, DropdownContentProps>(
  function DropdownContent(props, forwardedRef) {
    const { trapFocus, enableRemoveScroll = false, zIndex, scope, ...contentImplProps } = props;

    const context = useDropdownContext(scope);

    const contentRef = useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const isRightClickOutsideRef = useRef(false);
    const [isFullyHidden, setIsFullyHidden] = useState(!context.open);

    if (context.open && isFullyHidden) {
      setIsFullyHidden(false);
    }

    if (!context.keepChildrenMounted) {
      if (isFullyHidden) {
        return null;
      }
    }

    return (
      <DropdownPortal passThrough={context.breakpointActive} context={context} zIndex={zIndex}>
        <Stack
          passThrough={context.breakpointActive}
          pointerEvents={context.open ? (contentImplProps.pointerEvents ?? 'auto') : 'none'}
        >
          <DropdownContentImpl
            {...contentImplProps}
            context={context}
            enableRemoveScroll={enableRemoveScroll}
            ref={composedRefs}
            setIsFullyHidden={setIsFullyHidden}
            scope={scope}
            // we make sure we're not trapping once it's been closed
            // (closed !== unmounted when animating out)
            trapFocus={trapFocus ?? context.open}
            disableOutsidePointerEvents
            onCloseAutoFocus={
              props.onCloseAutoFocus === false
                ? undefined
                : composeEventHandlers(props.onCloseAutoFocus, (event) => {
                    if (event.defaultPrevented) return;
                    event.preventDefault();
                    if (!isRightClickOutsideRef.current) context.triggerRef?.current?.focus();
                  })
            }
            onPointerDownOutside={composeEventHandlers(
              props.onPointerDownOutside,
              (event) => {
                const originalEvent = event.detail.originalEvent;
                const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
                const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
                isRightClickOutsideRef.current = isRightClick;
              },
              { checkDefaultPrevented: false },
            )}
            // When focus is trapped, a `focusout` event may still happen.
            // We make sure we don't trigger our `onDismiss` in such case.
            onFocusOutside={composeEventHandlers(
              props.onFocusOutside,
              (event) => event.preventDefault(),
              { checkDefaultPrevented: false },
            )}
          />
        </Stack>
      </DropdownPortal>
    );
  },
);

function PortalAdaptSafe({
  children,
  context,
}: {
  children?: ReactNode;
  context: DropdownContextValue;
}) {
  if (needsRepropagation) {
    const parentContexts = useParentContexts(context.dropdownScope);
    return (
      <AdaptPortalContents scope={context.adaptScope}>
        <RepropagateParentContexts {...parentContexts}>{children}</RepropagateParentContexts>
      </AdaptPortalContents>
    );
  }

  return <AdaptPortalContents scope={context.adaptScope}>{children}</AdaptPortalContents>;
}

function DropdownPortal({
  context,
  zIndex,
  passThrough,
  children,
  onPress,
}: Pick<DropdownContentProps, 'zIndex' | 'passThrough' | 'children' | 'onPress'> & {
  context: DropdownContextValue;
}) {
  const themeName = useThemeName();

  let content = children;

  // native doesnt support portals
  if (needsRepropagation) {
    const parentContexts = useParentContexts(context.dropdownScope);

    content = <RepropagateParentContexts {...parentContexts}>{content}</RepropagateParentContexts>;
  }

  return (
    <Portal passThrough={passThrough} stackZIndex zIndex={zIndex as number}>
      {/* forceClassName avoids forced re-mount renders for some reason... see the HeadMenu as you change tints a few times */}
      {/* without this you'll see the site menu re-rendering. It must be something in wrapping children in Theme */}
      <Theme passThrough={passThrough} contain forceClassName name={themeName}>
        {!!context.open && !context.breakpointActive && (
          <Stack
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            onPress={composeEventHandlers(onPress, context.onOpenToggle)}
          />
        )}

        <StackZIndexContext zIndex={resolveViewZIndex(zIndex) as number}>
          {content}
        </StackZIndexContext>
      </Theme>
    </Portal>
  );
}

type ParentContexts = ReturnType<typeof useParentContexts>;

function RepropagateParentContexts({
  adaptContext,
  children,
  context,
  popperContext,
}: ParentContexts & {
  children: ReactNode;
}) {
  return (
    <PopperProvider scope={context.dropdownScope} {...popperContext}>
      <DropdownContext.Provider {...context}>
        <ProvideAdaptContext {...adaptContext}>{children}</ProvideAdaptContext>
      </DropdownContext.Provider>
    </PopperProvider>
  );
}

/* -------------------------------------------------------------------------------------------------
 * DropdownSheetController
 * -----------------------------------------------------------------------------------------------*/

const DropdownSheetController = ({
  context,
  ...props
}: {
  context: DropdownContextValue;
  children: ReactNode;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}) => {
  const showSheet = useShowDropdownSheet(context);
  const breakpointActive = context.breakpointActive;
  const getShowSheet = useGet(showSheet);

  return (
    <SheetController
      onOpenChange={(val: boolean) => {
        if (getShowSheet()) {
          props.onOpenChange?.(val);
        }
      }}
      open={context.open}
      hidden={!breakpointActive}
    >
      {props.children}
    </SheetController>
  );
};

/* -------------------------------------------------------------------------------------------------
 * DropdownInner
 * -----------------------------------------------------------------------------------------------*/

const DropdownInner = forwardRef<
  DropdownElement,
  DropdownProps & { id: string; adaptScope: string }
>(function DropdownInner(props, forwardedRef) {
  const {
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    scope = DEFAULT_SCOPE,
    keepChildrenMounted: keepChildrenMountedProp,
    hoverable,
    disableFocus,
    id,
    adaptScope,
    ...restProps
  } = props;

  const triggerRef = useRef<TamaguiElement>(null);
  const [hasCustomAnchor, setHasCustomAnchor] = useState(false);
  const viaRef = useRef<DropdownVia>(undefined);
  const [keepChildrenMounted] = useControllableState({
    prop: keepChildrenMountedProp,
    defaultProp: false,
    transition: keepChildrenMountedProp === 'lazy',
  });
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen || false,
    onChange: (val: boolean) => {
      onOpenChange?.(val, viaRef.current);
    },
  });

  const handleOpenChange = useEvent((val: boolean, via: DropdownVia) => {
    viaRef.current = via;
    setOpen(val);
  });

  const isAdapted = useAdaptIsActive(adaptScope);

  const floatingContext = useFloatingContext({
    open,
    setOpen: handleOpenChange,
    disable: isAdapted,
    hoverable,
    disableFocus: disableFocus,
  });

  const [anchorTo, setAnchorToRaw] = useState<DropdownRect>();

  const setAnchorTo = useCreateShallowSetState(
    setAnchorToRaw as CallbackSetState<DropdownRect>,
  ) as typeof setAnchorToRaw;

  useImperativeHandle(forwardedRef, () => ({
    anchorTo: setAnchorTo,
    toggle: () => setOpen((prev) => !prev),
    open: () => setOpen(true),
    close: () => setOpen(false),
    setOpen,
  }));

  // needs to be entirely memoized!
  const dropdownContext = {
    dropdownScope: scope,
    adaptScope,
    id,
    contentId: useId(),
    triggerRef: triggerRef as RefObject<TamaguiElement>,
    open,
    breakpointActive: isAdapted,
    onOpenChange: handleOpenChange,
    onOpenToggle: useEvent(() => {
      if (open && isAdapted) {
        return;
      }
      setOpen(!open);
    }),
    hasCustomAnchor,
    anchorTo,
    onCustomAnchorAdd: useCallback(() => setHasCustomAnchor(true), []),
    onCustomAnchorRemove: useCallback(() => setHasCustomAnchor(false), []),
    keepChildrenMounted,
  } satisfies DropdownContextValue;

  // // debug if changing too often
  // if (process.env.NODE_ENV === 'development') {
  //   Object.keys(dropdownContext).forEach((key) => {
  //     React.useEffect(
  //       () => console.log(`changed`, key, dropdownContext[key]),
  //       [dropdownContext[key]]
  //     )
  //   })
  // }

  const memoizedChildren = useMemo(
    () => (
      <DropdownContext.Provider scope={scope} {...dropdownContext}>
        <DropdownSheetController context={dropdownContext} onOpenChange={setOpen}>
          {children}
        </DropdownSheetController>
      </DropdownContext.Provider>
    ),
    [scope, setOpen, children, ...Object.values(dropdownContext)],
  );

  const contents = (
    <Popper open={open} passThrough={isAdapted} scope={scope} stayInFrame {...restProps}>
      {memoizedChildren}
    </Popper>
  );

  return (
    <>
      {isWeb ? (
        <FloatingOverrideContext.Provider value={floatingContext as UseFloatingFn}>
          {contents}
        </FloatingOverrideContext.Provider>
      ) : (
        contents
      )}
    </>
  );
});

/* -------------------------------------------------------------------------------------------------
 * DropdownBody
 * -----------------------------------------------------------------------------------------------*/

export const DropdownContentComponent = PopperContentFrame.styleable<
  DropdownContentProps & Omit<DropdownBodyProps, 'children'>
>((props, ref) => {
  const { children, scope, size, passThrough, ...rest } = props;
  const bodyProps = useExtractedProps(props, ['size']);
  const context = useDropdownContext(scope);
  const { popperContext } = useParentContexts(context.dropdownScope);

  return (
    <DropdownContent ref={ref} {...rest}>
      <DropdownBodyFrame placement={popperContext.placement} {...bodyProps}>
        <DropdownBodyContentFrame>{children}</DropdownBodyContentFrame>
      </DropdownBodyFrame>
    </DropdownContent>
  );
});

/* -------------------------------------------------------------------------------------------------
 * Dropdown
 * -----------------------------------------------------------------------------------------------*/
export const Dropdown = withStaticProperties(
  forwardRef<DropdownElement, DropdownProps>(function Dropdown(
    { scope = DEFAULT_SCOPE, offset = 0, ...props },
    ref,
  ) {
    const id = useId();
    const adaptScope = `DropdownAdapt${scope}`;

    return (
      <AdaptParent scope={adaptScope} portal>
        <DropdownInner
          adaptScope={adaptScope}
          ref={ref}
          id={id}
          scope={scope}
          offset={offset}
          {...props}
        />
      </AdaptParent>
    );
  }),
  {
    Anchor: DropdownAnchor,
    Trigger: DropdownTrigger,
    Content: DropdownContentComponent,
    Close: DropdownClose,
    Adapt,
    ScrollView: DropdownScrollView,
    Sheet: Sheet.Controlled,
    FocusScope: FocusScopeController as ComponentType<FocusScopeControllerProps>,
  },
);

function useParentContexts(scope: string) {
  const context = useDropdownContext(scope);
  const popperContext = usePopperContext(scope);
  const adaptContext = useAdaptContext(context.adaptScope);
  return {
    popperContext,
    adaptContext,
    context,
  };
}

function useShowDropdownSheet(context: DropdownContextValue) {
  const isAdapted = useAdaptIsActive(context.adaptScope);
  return context.open === false ? false : isAdapted;
}

function getState(open: boolean) {
  return open ? 'open' : 'closed';
}
