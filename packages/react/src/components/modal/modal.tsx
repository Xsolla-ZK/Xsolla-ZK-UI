import styled from '@emotion/styled';
import { Modal } from '@mui/base';
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import XZKUIAnimatedFade from '../animated/fade';
import XZKUIAnimatedSlideUp from '../animated/slide-up';
import XZKUISvgIcon from '../svg-icon/svg-icon';
import SvgCross from '../svg-icons/cross';
import XZKUIModalProvider, { useXZKUIModalCtx } from './modal.context';
import Styled from './modal.styled';
import type { XZKUIModalBodyProps, XZKUIModalHeaderProps, XZKUIModalProps } from './modal.types';
import type { MouseEventHandler, PropsWithChildren, ReactElement } from 'react';

interface BackdropProps {
  children?: ReactElement;
  open: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(props, ref) {
  const { open, ...other } = props;
  return <XZKUIAnimatedFade ref={ref} in={open} {...other} />;
});

const XZKUIModalBackdrop = styled(Backdrop)(
  ({ theme }) => `
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: ${theme.theme.layer.floorScrim};
    backdrop-filter: blur(12px);
    -webkit-tap-highlight-color: transparent;
  `,
);

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function XZKUIModal(props: XZKUIModalProps) {
  const { trigger, children, opened, open: openOwn, initialStep, ...rest } = props;
  const [open, setOpen] = useState(() => opened ?? false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const transitionExited = useRef<() => void>();

  useEffect(() => {
    if (opened !== undefined) setOpen(opened);
  }, [opened]);

  const onTransitionExited = useCallback((cb: () => void) => {
    transitionExited.current = cb;
  }, []);

  const sharedProps = {
    open,
    setOpen,
    handleOpen,
    handleClose,
  };

  return (
    <>
      <XZKUIModalProvider
        initialStep={initialStep}
        onTransitionExited={onTransitionExited}
        handleClose={handleClose}
      >
        {trigger?.(sharedProps)}
        <StyledModal
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open={openOwn || open}
          onClose={handleClose}
          closeAfterTransition
          onTransitionExited={transitionExited.current}
          slots={{ backdrop: XZKUIModalBackdrop }}
          {...rest}
        >
          <XZKUIAnimatedSlideUp in={openOwn || open}>
            {typeof children === 'function'
              ? children({ ...sharedProps, onTransitionExited })
              : children}
          </XZKUIAnimatedSlideUp>
        </StyledModal>
      </XZKUIModalProvider>
    </>
  );
}

function XZKUIModalHeader({ title, subtitle }: XZKUIModalHeaderProps) {
  const { step, close, back } = useXZKUIModalCtx();
  return (
    <Styled.Header>
      {step > 0 && <Styled.HeaderLeft>back</Styled.HeaderLeft>}
      <Styled.HeaderContent>
        {title && <Styled.Title>{title}</Styled.Title>}
        {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
      </Styled.HeaderContent>
      <Styled.HeaderRight>
        <Styled.CloseButton component="button" size={300} onClick={close}>
          <XZKUISvgIcon icon={SvgCross} />
        </Styled.CloseButton>
      </Styled.HeaderRight>
    </Styled.Header>
  );
}

function XZKUIModalContent({ children }: PropsWithChildren) {
  return (
    <Styled.ContentWrapper>
      <Styled.Content>{children}</Styled.Content>
    </Styled.ContentWrapper>
  );
}

function XZKUIModalFooter({ children }: PropsWithChildren) {
  return <Styled.Footer>{children}</Styled.Footer>;
}

export function XZKUIModalBody({ headerProps, children, footer }: XZKUIModalBodyProps) {
  return (
    <XZKUIModalBase>
      <XZKUIModalHeader {...headerProps} />
      <XZKUIModalContent>{children}</XZKUIModalContent>
      {footer && <Styled.Footer>{footer}</Styled.Footer>}
    </XZKUIModalBase>
  );
}

function XZKUIModalBase({ children }: PropsWithChildren) {
  return <Styled.Main>{children}</Styled.Main>;
}

XZKUIModalBody.Base = XZKUIModalBase;
XZKUIModalBody.Header = XZKUIModalHeader;
XZKUIModalBody.Content = XZKUIModalContent;
XZKUIModalBody.Footer = XZKUIModalFooter;

export default XZKUIModal;
