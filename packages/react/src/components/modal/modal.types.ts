// import type { Optional } from '@xsolla-zk-ui/react/types/helpers';
// import type { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';

// type Variants = 'curtain' | 'popup';

// export interface ModalContextValues {
//   step: number;
//   changeStep: (value: number) => void;
//   back: () => void;
//   next: () => void;
//   close: ModalSharedProps['handleClose'];
//   onTransitionExited: ModalSharedProps['onTransitionExited'];
// }

// export type ModalSharedProps = {
//   open: boolean;
//   setOpen: Dispatch<SetStateAction<boolean>>;
//   handleOpen: () => void;
//   handleClose: () => void;
//   onTransitionExited: (cb: () => void) => void;
// };

// type ModalOwnProps = Optional<Omit<MuiModalOwnProps, 'children'>, 'open'>;

// export type ModalProps =
//   | (ModalOwnProps & {
//       trigger: (props: Omit<ModalSharedProps, 'onTransitionExited'>) => ReactNode;
//       opened?: boolean;
//       children: ((props: ModalSharedProps) => ReactElement) | ReactElement;
//       className?: string;
//       initialStep?: number;
//     })
//   | (ModalOwnProps & {
//       trigger?: never;
//       opened: boolean;
//       children: ((props: ModalSharedProps) => ReactElement) | ReactElement;
//       className?: string;
//       initialStep?: number;
//     });

// export interface ModalHeaderProps {
//   title?: ReactNode;
//   subtitle?: ReactNode;
// }

// export interface ModalFooterProps {
//   blur?: boolean;
// }

// export interface ModalBodyBaseProps {
//   variant?: Variants;
//   className?: string;
// }

// type SlotProps = WithSlots<{
//   header: {
//     type: 'div';
//     props: ModalHeaderProps;
//   };
//   footer: {
//     type: 'div';
//     props: ModalFooterProps;
//   };
// }>;

// export interface ModalBodyProps extends ModalBodyBaseProps, SlotProps {
//   children?: ((context: ModalContextValues) => ReactNode) | ReactNode;
// }
