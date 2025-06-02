// import { withStaticProperties } from '@tamagui/core';
// import { forwardRef, ReactNode, type ForwardedRef } from 'react';
// import { Dialog } from '../dialog';
// import { Sheet } from '../sheet';
// import { ModalContent, ModalContentInner, ModalHeader } from './modal.styled';
// import type { DialogProps } from '../dialog';
// import type { SheetProps } from '../sheet';
// import type { ScrollView } from '@tamagui/scroll-view';

// type ModalVariant = 'dialog' | 'sheet';

// interface BaseModalProps {
//   variant: ModalVariant;
// }

// interface DialogModalProps extends BaseModalProps, DialogProps {
//   variant: 'dialog';
// }

// interface SheetModalProps extends BaseModalProps, SheetProps {
//   variant: 'sheet';
// }

// type ModalProps = DialogModalProps | SheetModalProps;

// const ModalComponent = ({ variant, ...rest }: ModalProps) => {
//   if (variant === 'dialog') {
//     const { children, ...dialogProps } = rest as DialogModalProps;
//     return (
//       <Dialog {...dialogProps}>
//         <Dialog.Trigger>Открыть диалог</Dialog.Trigger>
//         <Dialog.Content>{children}</Dialog.Content>
//       </Dialog>
//     );
//   }
//   const { children, ...sheetProps } = rest as SheetModalProps;
//   return (
//     <Sheet {...sheetProps}>
//       <Sheet.Overlay enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />

//       <Sheet.Handle />
//       <Sheet.Frame>{children}</Sheet.Frame>
//     </Sheet>
//   );
// };

// const ModalContentComponent = ModalContent.styleable(
//   ({ children, ...props }, ref: ForwardedRef<ScrollView>) => (
//     <ModalContent {...props} ref={ref}>
//       <ModalContentInner>{children}</ModalContentInner>
//     </ModalContent>
//   ),
// );

// const Modal = withStaticProperties(ModalComponent, {
//   Header: ModalHeader,
// });

// export default Modal;
