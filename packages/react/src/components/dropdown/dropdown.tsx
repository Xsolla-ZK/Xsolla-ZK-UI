import { Adapt, AdaptParent, useAdaptIsActive } from '@tamagui/adapt';
import {
  createShallowSetState,
  isWeb,
  useEvent,
  useGet,
  withStaticProperties,
} from '@tamagui/core';
import { FloatingOverrideContext } from '@tamagui/floating';
// import {
//   PopoverAnchor,
//   PopoverArrow,
//   PopoverClose,
//   PopoverContent,
//   PopoverContext,
//   PopoverTrigger,
//   useFloatingContext,
//   usePopoverContext,
// } from '@tamagui/popover';
import { Popper } from '@tamagui/popper';
import { ScrollView } from '@tamagui/scroll-view';
import { useControllableState } from '@tamagui/use-controllable-state';
import { forwardRef, useCallback, useId, useImperativeHandle, useRef, useState } from 'react';
import { Sheet } from '../sheet';
import { SheetController } from '../sheet/sheet-controller';
import type { DropdownScopedProps, DropdownSizes } from './dropdown.types';
import type { TamaguiElement } from '@tamagui/core';
import type { UseFloatingFn } from '@tamagui/floating';
// import type { Popover, PopoverProps } from '@tamagui/popover';
import type { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';

type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const POPOVER_SCOPE = 'PopoverScope';

type PopoverContextValue = {
  id: string;
  triggerRef: RefObject<unknown>;
  contentId?: string;
  open: boolean;
  onOpenChange(open: boolean, via: 'hover' | 'press'): void;
  onOpenToggle(): void;
  hasCustomAnchor: boolean;
  onCustomAnchorAdd(): void;
  onCustomAnchorRemove(): void;
  size?: DropdownSizes;
  breakpointActive?: boolean;
  keepChildrenMounted?: boolean;
  anchorTo?: Rect;
};

const useShowPopoverSheet = (context: PopoverContextValue) => {
  const isAdapted = useAdaptIsActive();
  return context.open === false ? false : isAdapted;
};

const PopoverSheetController = ({
  __scopePopover,
  ...props
}: DropdownScopedProps<{
  children: ReactNode;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}>) => {
  const context = usePopoverContext(__scopePopover);
  const showSheet = useShowPopoverSheet(context as unknown as PopoverContextValue);
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
      hidden={breakpointActive === false}
    >
      {/* @ts-ignore: react versions types diff */}
      {props.children}
    </SheetController>
  );
};

const PopoverInner = forwardRef<Popover, DropdownScopedProps<PopoverProps> & { id: string }>(
  function PopoverInner(props, forwardedRef) {
    const {
      children,
      open: openProp,
      defaultOpen,
      onOpenChange,
      __scopePopover,
      keepChildrenMounted,
      hoverable,
      disableFocus,
      id,
      ...restProps
    } = props;

    const triggerRef = useRef<TamaguiElement>(null);
    const [hasCustomAnchor, setHasCustomAnchor] = useState(false);
    const viaRef = useRef<'hover' | 'press' | undefined>(undefined);
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen || false,
      onChange: (val: boolean) => {
        onOpenChange?.(val, viaRef.current);
      },
    });

    const handleOpenChange = useEvent<NonNullable<PopoverProps['onOpenChange']>>((val, via) => {
      viaRef.current = via;
      setOpen(val);
    });

    const isAdapted = useAdaptIsActive();

    const floatingContext = useFloatingContext({
      open,
      setOpen: handleOpenChange,
      disable: isAdapted,
      hoverable,
      disableFocus: disableFocus,
    });

    const [anchorTo, setAnchorToRaw] = useState<Rect>();

    const setAnchorTo = createShallowSetState(
      setAnchorToRaw as Dispatch<SetStateAction<Rect>>,
    ) as typeof setAnchorToRaw;

    useImperativeHandle(forwardedRef, () => ({
      anchorTo: setAnchorTo,
      toggle: () => setOpen((prev) => !prev),
      open: () => setOpen(true),
      close: () => setOpen(false),
      setOpen,
    }));

    // needs to be entirely memoized!
    const popoverContext = {
      id,
      contentId: useId(),
      triggerRef,
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
    };

    const contents = (
      <Popper __scopePopper={__scopePopover || POPOVER_SCOPE} stayInFrame {...restProps}>
        <PopoverContext.Provider scope={__scopePopover} {...popoverContext}>
          <PopoverSheetController onOpenChange={setOpen}>{children}</PopoverSheetController>
        </PopoverContext.Provider>
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
  },
);

export const Dropdown = withStaticProperties(
  forwardRef<Popover, DropdownScopedProps<PopoverProps>>(function Dropdown(props, ref) {
    const id = useId();

    return (
      <AdaptParent scope={`${id}PopoverContents`} portal>
        <PopoverInner ref={ref} id={id} {...props} />
      </AdaptParent>
    );
  }),
  {
    Anchor: PopoverAnchor,
    Arrow: PopoverArrow,
    Trigger: PopoverTrigger,
    Content: PopoverContent,
    Close: PopoverClose,
    Adapt,
    ScrollView: ScrollView,
    Sheet: Sheet.Controlled,
  },
);
