import type { ModalOwnProps as MuiModalOwnProps } from '@mui/base';
import type { XZKUIWithSlots } from '@xsolla-zk-ui/react/types/components';
import type { Optional } from '@xsolla-zk-ui/react/types/helpers';
import type { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';

type Variants = 'curtain' | 'popup';

export interface XZKUIModalContextValues {
  // open: boolean;
  step: number;
  changeStep: (value: number) => void;
  back: () => void;
  next: () => void;
  close: XZKUIModalSharedProps['handleClose'];
  onTransitionExited: XZKUIModalSharedProps['onTransitionExited'];
}

export type XZKUIModalSharedProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleOpen: () => void;
  handleClose: () => void;
  onTransitionExited: (cb: () => void) => void;
};

type ModalOwnProps = Optional<Omit<MuiModalOwnProps, 'children'>, 'open'>;

export type XZKUIModalProps =
  | (ModalOwnProps & {
      trigger: (props: Omit<XZKUIModalSharedProps, 'onTransitionExited'>) => ReactNode;
      opened?: boolean;
      children: ((props: XZKUIModalSharedProps) => ReactElement) | ReactElement;
      className?: string;
      initialStep?: number;
    })
  | (ModalOwnProps & {
      trigger?: never;
      opened: boolean;
      children: ((props: XZKUIModalSharedProps) => ReactElement) | ReactElement;
      className?: string;
      initialStep?: number;
    });

export interface XZKUIModalHeaderProps {
  title?: ReactNode;
  subtitle?: ReactNode;
}

export interface XZKUIModalFooterProps {
  blur?: boolean;
}

export interface XZKUIModalBodyBaseProps {
  variant?: Variants;
  className?: string;
}

type SlotProps = XZKUIWithSlots<{
  header: {
    type: 'div';
    props: XZKUIModalHeaderProps;
  };
  footer: {
    type: 'div';
    props: XZKUIModalFooterProps;
  };
}>;

export interface XZKUIModalBodyProps extends XZKUIModalBodyBaseProps, SlotProps {
  children?: ((context: XZKUIModalContextValues) => ReactNode) | ReactNode;
}
