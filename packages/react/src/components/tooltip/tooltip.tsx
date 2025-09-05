import '@tamagui/polyfill-dev';

import {
  FloatingDelayGroup,
  useDelayGroup,
  useDelayGroupContext,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useEvent } from '@tamagui/core';
import { FloatingOverrideContext } from '@tamagui/floating';
import { withStaticProperties } from '@tamagui/helpers';
import { useControllableState } from '@tamagui/use-controllable-state';
import { TOOLTIP_COMPONENT_NAME } from '@xsolla-zk/constants';
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { DropdownAnchor, DropdownContent, DropdownContext, DropdownTrigger } from '../dropdown';
import { Popper, type PopperProps } from '../popper';
import { PopperContentFrame } from '../popper/popper.styled';
import { TooltipFrame, TooltipText } from './tooltip.styled';
import type { DropdownAnchorProps, DropdownContentProps, DropdownTriggerProps } from '../dropdown';
import type { ScopedProps, TamaguiElement } from '@tamagui/core';
import type { UseFloatingFn } from '@tamagui/floating';
import type { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';

const TOOLTIP_SCOPE = '';
const voidFn = () => {};

export type TooltipContentProps = ScopedProps<Omit<DropdownContentProps, 'preset'>>;

const PreventTooltipAnimationContext = createContext(false);

// warning: setting to stylebale causes issues with themeInverse across portal root

const TooltipContent = PopperContentFrame.styleable<TooltipContentProps>(
  ({ children, ...props }, ref) => {
    const preventAnimation = useContext(PreventTooltipAnimationContext);

    return (
      <DropdownContent
        scope={props.scope || TOOLTIP_SCOPE}
        componentName={TOOLTIP_COMPONENT_NAME}
        disableFocusScope
        pointerEvents="none"
        ref={ref}
        {...props}
        {...(preventAnimation && {
          animation: null,
        })}
      >
        <TooltipFrame>{children}</TooltipFrame>
      </DropdownContent>
    );
  },
);

// const TooltipArrow = forwardRef<TamaguiElement, PopperArrowProps>((props, ref) => (
//   <DropdownArrow
//     scope={props.scope || TOOLTIP_SCOPE}
//     componentName="Tooltip"
//     ref={ref}
//     {...props}
//   />
// ));

export type TooltipProps = ScopedProps<
  PopperProps & {
    open?: boolean;
    unstyled?: boolean;
    children?: ReactNode;
    onOpenChange?: (open: boolean) => void;
    focus?: {
      enabled?: boolean;
      visibleOnly?: boolean;
    };
    groupId?: string;
    restMs?: number;
    delay?:
      | number
      | {
          open?: number;
          close?: number;
        };
    disableAutoCloseOnScroll?: boolean;
  }
>;

type Delay =
  | number
  | Partial<{
      open: number;
      close: number;
    }>;

export const TooltipGroup = ({
  children,
  delay,
  preventAnimation = false,
  timeoutMs,
}: {
  children?: ReactNode;
  delay: Delay;
  preventAnimation?: boolean;
  timeoutMs?: number;
}) => (
  <PreventTooltipAnimationContext.Provider value={preventAnimation}>
    <FloatingDelayGroup timeoutMs={timeoutMs} delay={useMemo(() => delay, [JSON.stringify(delay)])}>
      {children}
    </FloatingDelayGroup>
  </PreventTooltipAnimationContext.Provider>
);

const setOpens = new Set<Dispatch<SetStateAction<boolean>>>();

export const closeOpenTooltips = () => {
  setOpens.forEach((x) => x(false));
};

const TooltipComponent = forwardRef(function Tooltip(
  props: TooltipProps,
  // no real ref here but React complaining need to see why see SandboxCustomStyledAnimatedTooltip.ts
  _ref,
) {
  const {
    children,
    delay: delayProp = 400,
    restMs = typeof delayProp === 'undefined' ? 0 : typeof delayProp === 'number' ? delayProp : 0,
    onOpenChange: onOpenChangeProp,
    focus,
    open: openProp,
    disableAutoCloseOnScroll,
    scope = TOOLTIP_SCOPE,
    ...restProps
  } = props;
  const triggerRef = useRef<TamaguiElement>(null);
  const [hasCustomAnchor, setHasCustomAnchor] = useState(false);
  const { delay: delayGroup, setCurrentId } = useDelayGroupContext();
  const delay = delayProp ?? delayGroup ?? 0;
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: false,
    onChange: onOpenChangeProp,
  });
  const id = props.groupId;

  const onOpenChange = useEvent((open: boolean) => {
    if (open) {
      setCurrentId(id);
    }
    setOpen(open);
  });

  // Auto close when document scroll
  useEffect(() => {
    if (!open) return;
    if (disableAutoCloseOnScroll) return;
    if (typeof document === 'undefined') return;
    const closeIt = () => {
      setOpen(false);
    };
    setOpens.add(setOpen);
    document.documentElement.addEventListener('scroll', closeIt);
    return () => {
      setOpens.delete(setOpen);
      document.documentElement.removeEventListener('scroll', closeIt);
    };
  }, [open, disableAutoCloseOnScroll]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const useFloatingFn: UseFloatingFn = (props) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const floating = useFloating({
      ...props,
      open,
      onOpenChange,
    });
    const { delay: delayContext } = useDelayGroup(floating.context, { id });
    const delayOut = delay ?? delayContext;

    const { getReferenceProps, getFloatingProps } = useInteractions([
      useHover(floating.context, {
        delay: delayOut,
        restMs,
      }),
      useFocus(floating.context, focus),
      useRole(floating.context, { role: 'tooltip' }),
      useDismiss(floating.context),
    ]);
    return {
      ...floating,
      open,
      getReferenceProps,
      getFloatingProps,
    };
  };

  const useFloatingContext = useCallback(useFloatingFn, [
    id,
    delay,
    open,
    restMs,
    focus ? JSON.stringify(focus) : 0,
  ]);
  const onCustomAnchorAdd = useCallback(() => setHasCustomAnchor(true), []);
  const onCustomAnchorRemove = useCallback(() => setHasCustomAnchor(false), []);
  const contentId = useId();

  return (
    // TODO: FloatingOverrideContext might also need to be scoped
    <FloatingOverrideContext.Provider value={useFloatingContext}>
      {/* default tooltip to a smaller size */}
      <Popper
        scope={scope}
        // size={smallerSize?.key as SizeTokens}
        allowFlip
        stayInFrame
        open={open}
        {...restProps}
      >
        <DropdownContext.Provider
          dropdownScope={scope}
          scope={scope}
          contentId={contentId}
          triggerRef={triggerRef as RefObject<TamaguiElement>}
          open={open}
          onOpenChange={setOpen}
          onOpenToggle={voidFn}
          hasCustomAnchor={hasCustomAnchor}
          onCustomAnchorAdd={onCustomAnchorAdd}
          onCustomAnchorRemove={onCustomAnchorRemove}
        >
          {children}
        </DropdownContext.Provider>
      </Popper>
    </FloatingOverrideContext.Provider>
  );
});

const TooltipTrigger = forwardRef<TamaguiElement, DropdownTriggerProps>(function TooltipTrigger(
  props: ScopedProps<DropdownTriggerProps>,
  ref,
) {
  const { scope, ...rest } = props;
  return <DropdownTrigger {...rest} scope={scope || TOOLTIP_SCOPE} ref={ref} />;
});

const TooltipAnchor = forwardRef<TamaguiElement, DropdownAnchorProps>(function TooltipAnchor(
  props: ScopedProps<DropdownAnchorProps>,
  ref,
) {
  const { scope, ...rest } = props;
  return <DropdownAnchor {...rest} scope={scope || TOOLTIP_SCOPE} ref={ref} />;
});

export const Tooltip = withStaticProperties(TooltipComponent, {
  Anchor: TooltipAnchor,
  Content: TooltipContent,
  Text: TooltipText,
  Trigger: TooltipTrigger,
});
