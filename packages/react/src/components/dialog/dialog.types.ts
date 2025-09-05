import type { SheetPresets } from '../sheet';
import type {
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
import type { ComponentsConfig } from '../../utils';
import type { GetProps, ScopedProps, TamaguiElement } from '@tamagui/core';
import type { DismissableProps } from '@tamagui/dismissable';
import type { FocusScopeProps } from '@tamagui/focus-scope';
import type { PropsWithChildren, ReactNode, RefObject } from 'react';

export type DialogSizes = keyof ComponentsConfig['modal'] | (string & {});

export type DialogPresets = SheetPresets;

export type DialogProps = ScopedProps<{
  children?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;

  /**
   * Used to disable the remove scroll functionality when open
   */
  disableRemoveScroll?: boolean;

  /**
   * The size of the dialog
   */
  size?: DialogSizes;
}>;

type DialogScopes = string;
type NonNull<A> = Exclude<A, void | null>;

export type DialogContextValue = {
  disableRemoveScroll?: boolean;
  triggerRef: RefObject<TamaguiElement | null>;
  contentRef: RefObject<TamaguiElement | null>;
  contentId: string;
  titleId: string;
  descriptionId: string;
  onOpenToggle: () => void;
  open: NonNull<DialogProps['open']>;
  onOpenChange: NonNull<DialogProps['onOpenChange']>;
  modal: NonNull<DialogProps['modal']>;
  forceMount?: boolean;
  dialogScope: DialogScopes;
  adaptScope: string;

  size: DialogSizes;
};

export type DialogTriggerProps = GetProps<typeof DialogTriggerFrame>;

export type PortalContextValue = { forceMount?: true };

export type DialogPortalProps = Omit<GetProps<typeof DialogPortalFrame>, 'children'> &
  PropsWithChildren<{
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
  }>;

export type DialogOverlayProps = GetProps<typeof DialogOverlayFrame> & {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
};

type DialogContentFrameProps = GetProps<typeof DialogContentFrame>;

export type DialogContentImplProps = DialogContentFrameProps &
  Omit<DismissableProps, 'onDismiss'> & {
    /**
     * When `true`, focus cannot escape the `Content` via keyboard,
     * pointer, or a programmatic focus.
     * @defaultValue false
     */
    trapFocus?: FocusScopeProps['trapped'];

    /**
     * Event handler called when auto-focusing on open.
     * Can be prevented.
     */
    onOpenAutoFocus?: FocusScopeProps['onMountAutoFocus'];

    /**
     * Event handler called when auto-focusing on close.
     * Can be prevented.
     */
    onCloseAutoFocus?: FocusScopeProps['onUnmountAutoFocus'];

    context: DialogContextValue;
  };

export interface DialogContentTypeProps
  extends Omit<DialogContentImplProps, 'trapFocus' | 'disableOutsidePointerEvents'> {
  context: DialogContextValue;
}

export interface DialogContentProps
  extends DialogContentFrameProps,
    Omit<DialogContentTypeProps, 'context' | 'onPointerDownCapture'> {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}

export type DialogTitleProps = GetProps<typeof DialogTitleFrame>;

export type DialogDescriptionProps = GetProps<typeof DialogDescriptionFrame>;

export interface DialogCloseExtraProps {
  displayWhenAdapted?: boolean;
}

export type DialogCloseProps = GetProps<typeof DialogCloseFrame> & DialogCloseExtraProps;

export type DialogHandle = {
  open: (val: boolean) => void;
};

export type TitleWarningProps = { titleId?: string };

export type DescriptionWarningProps = {
  contentRef: RefObject<TamaguiElement | null>;
  descriptionId?: string;
};

export type DialogHeaderProps = GetProps<typeof DialogHeaderFrame>;

export type DialogBodyProps = GetProps<typeof DialogBodyFrame>;

export type DialogFooterProps = GetProps<typeof DialogFooterFrame>;
