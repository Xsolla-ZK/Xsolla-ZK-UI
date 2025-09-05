import type { DropdownBodyFrame } from './dropdown.styled';
import type { ComponentsConfig } from '../../utils';
import type { PopperContent } from '../popper/popper';
import type { PopperContentFrame } from '../popper/popper.styled';
import type { PopperContentProps, PopperProps } from '../popper/popper.types';
import type { UseHoverProps } from '@floating-ui/react';
import type { GetProps, ScopedProps, StackProps, TamaguiElement } from '@tamagui/core';
import type { DismissableProps } from '@tamagui/dismissable';
import type { FocusScopeProps } from '@tamagui/focus-scope';
import type { ComponentRef, Dispatch, ReactNode, RefObject, SetStateAction } from 'react';

export type DropdownSizes = keyof ComponentsConfig['dropdown'] | (string & {});

export type DropdownVia = 'hover' | 'press';

export type DropdownRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type DropdownBodyProps = GetProps<typeof DropdownBodyFrame>;

export type DropdownContextValue = {
  dropdownScope: string;
  adaptScope: string;
  id: string;
  triggerRef: RefObject<TamaguiElement> | null;
  contentId?: string;
  open: boolean;
  onOpenChange: (open: boolean, via: 'hover' | 'press') => void;
  onOpenToggle: () => void;
  hasCustomAnchor: boolean;
  onCustomAnchorAdd: () => void;
  onCustomAnchorRemove: () => void;
  breakpointActive?: boolean;
  keepChildrenMounted?: boolean | 'lazy';
  anchorTo?: DropdownRect;
};

export type DropdownProps = ScopedProps<Omit<PopperProps, 'size'>> & {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean, via?: DropdownVia) => void;

  /**
   * When true, children never un-mount, otherwise they mount on open.
   * When "lazy", they mount inside a startTransition after first render.
   *
   * @default false
   */
  keepChildrenMounted?: boolean | 'lazy';

  /**
   * Enable staying open while mouseover
   */
  hoverable?: boolean | UseHoverProps;

  /**
   * Disable focusing behavior on open
   */
  disableFocus?: boolean;

  /**
   * Size of the dropdown
   */
  size?: DropdownSizes;
};

export type DropdownContentImplElement = ComponentRef<typeof PopperContent>;

export type DropdownContentTypeElement = DropdownContentImplElement;

export interface DropdownContentTypeProps
  extends Omit<DropdownContentImplProps, 'disableOutsidePointerEvents'> {
  /** enable animation for content position changing */
  enableAnimationForPositionChange?: boolean;
}

export type DropdownContentProps = Omit<DropdownContentTypeProps, 'children'> &
  Omit<GetProps<typeof PopperContentFrame>, 'children'> & {
    children?: ReactNode;
  };

export type DropdownContentImplProps = PopperContentProps &
  Omit<DismissableProps, 'onDismiss' | 'children' | 'onPointerDownCapture'> & {
    /**
     * Rather than mount the content immediately, mounts it in a useEffect
     * inside a startTransition to clear the main thread
     */
    lazyMount?: boolean;

    /**
     * Whether focus should be trapped within the `Popover`
     * @default false
     */
    trapFocus?: FocusScopeProps['trapped'];

    /**
     * Whether popover should not focus contents on open
     * @default false
     */
    disableFocusScope?: boolean;

    /**
     * Event handler called when auto-focusing on open. Can be prevented.
     */
    onOpenAutoFocus?: FocusScopeProps['onMountAutoFocus'];

    /**
     * Event handler called when auto-focusing on close. Can be prevented.
     */
    onCloseAutoFocus?: FocusScopeProps['onUnmountAutoFocus'] | false;

    enableRemoveScroll?: boolean;

    freezeContentsWhenHidden?: boolean;
  };

export type DropdownContentImplInteralProps = Omit<DropdownContentImplProps, 'children'> & {
  context: DropdownContextValue;
  setIsFullyHidden: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
};

export type DropdownElement = {
  anchorTo: (rect: DropdownRect) => void;
  toggle: () => void;
  open: () => void;
  close: () => void;
  setOpen: (open: boolean) => void;
};

export type DropdownTriggerProps = StackProps;
export type DropdownAnchorProps = StackProps;
