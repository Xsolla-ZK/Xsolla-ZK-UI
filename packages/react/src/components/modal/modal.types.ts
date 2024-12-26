import type { ModalOwnProps as MuiModalOwnProps } from '@mui/base';
import type { Optional } from '@xsolla-zk-ui/react/types/helpers';
import type { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';

export type XZKUIModalSharedProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleOpen: () => void;
  handleClose: (onTransitionExited?: () => void) => void;
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

export interface XZKUIModalBodyProps {
  headerProps: XZKUIModalHeaderProps;
  children?: ReactNode;
  footer?: ReactNode;
}
