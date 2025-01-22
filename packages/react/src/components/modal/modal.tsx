import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Modal } from '@mui/base';
import clsx from 'clsx';
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import XZKUIAnimatedFade from '../animated/fade';
import XZKUIAnimatedSlideUp from '../animated/slide-up';
import XZKUIRichIcon from '../rich-icon/rich-icon';
import XZKUISvgIcon from '../svg-icon/svg-icon';
import SvgChevronLeft from '../svg-icons/chevron-left';
import SvgCross from '../svg-icons/cross';
import xzkuiModalClasses from './modal.classes';
import XZKUIModalProvider, { useXZKUIModalCtx } from './modal.context';
import Styled from './modal.styled';
import type {
  XZKUIModalBodyBaseProps,
  XZKUIModalBodyProps,
  XZKUIModalFooterProps,
  XZKUIModalHeaderProps,
  XZKUIModalProps,
} from './modal.types';
import type { MouseEventHandler, PropsWithChildren, ReactElement, ReactNode } from 'react';

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
              ? children({
                  ...sharedProps,
                  onTransitionExited,
                })
              : children}
          </XZKUIAnimatedSlideUp>
        </StyledModal>
      </XZKUIModalProvider>
    </>
  );
}

function XZKUIModalHeader({ title, subtitle, className }: XZKUIModalHeaderProps) {
  const { step, close, back } = useXZKUIModalCtx();
  const headerEmpty = !(title || subtitle);
  return (
    <Styled.Header className={clsx(className, [headerEmpty && xzkuiModalClasses.headerEmpty])}>
      {step > 0 && (
        <Styled.HeaderLeft>
          <XZKUIRichIcon
            component="button"
            aria-label="modal back"
            bg={({ theme }) => theme.overlay.neutral}
            size={300}
            onClick={back}
          >
            <XZKUISvgIcon icon={SvgChevronLeft} />
          </XZKUIRichIcon>
        </Styled.HeaderLeft>
      )}
      <Styled.HeaderContent>
        {title && <Styled.Title>{title}</Styled.Title>}
        {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
      </Styled.HeaderContent>
      <Styled.HeaderRight>
        <XZKUIRichIcon
          component="button"
          aria-label="modal close"
          bg={({ theme }) => theme.overlay.neutral}
          size={300}
          onClick={close}
        >
          <XZKUISvgIcon icon={SvgCross} />
        </XZKUIRichIcon>
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

function XZKUIModalFooter({ children, className, blur }: PropsWithChildren<XZKUIModalFooterProps>) {
  return (
    <Styled.Footer className={clsx(className, [blur && xzkuiModalClasses.footerBlured])}>
      {children}
    </Styled.Footer>
  );
}

export function XZKUIModalBody({
  className,
  headerProps,
  children,
  footer,
  footerProps,
  variant,
}: XZKUIModalBodyProps) {
  const ctx = useXZKUIModalCtx();
  return (
    <XZKUIModalBodyBase className={className} variant={variant}>
      <XZKUIModalHeader {...headerProps} />
      <XZKUIModalContent>
        {typeof children === 'function' ? children(ctx) : children}
      </XZKUIModalContent>
      {footer && <XZKUIModalFooter {...footerProps}>{footer}</XZKUIModalFooter>}
    </XZKUIModalBodyBase>
  );
}

function XZKUIModalBodyBase({
  children,
  className,
  variant = 'curtain',
}: PropsWithChildren<XZKUIModalBodyBaseProps>) {
  return (
    <Styled.Root className={clsx(className, [xzkuiModalClasses[variant]])}>{children}</Styled.Root>
  );
}

XZKUIModalBody.Base = XZKUIModalBodyBase;
XZKUIModalBody.Header = XZKUIModalHeader;
XZKUIModalBody.Content = XZKUIModalContent;
XZKUIModalBody.Footer = XZKUIModalFooter;

export default XZKUIModal;
