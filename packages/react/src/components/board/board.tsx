import clsx from 'clsx';
import { useState } from 'react';
import XZKUISvgIcon from '../svg-icon/svg-icon';
import SvgCross from '../svg-icons/cross';
import xzkuiBoardClasses from './board.classes';
import Styled from './board.styled';
import type { XZKUIBoardProps } from './board.types';

function XZKUIBoard({ children, className, bg, isClosable }: XZKUIBoardProps) {
  const [show, setShow] = useState(true);
  const handleHideBanner = () => setShow(false);

  if (!show) return null;

  return (
    <Styled.Root
      xzkuiBg={bg}
      className={clsx(className, [isClosable && xzkuiBoardClasses.isClosable])}
    >
      {children}
      {isClosable && (
        <Styled.Control
          component="button"
          size={200}
          bg={({ theme }) => theme.overlay.neutral}
          onClick={handleHideBanner}
        >
          <XZKUISvgIcon icon={SvgCross} />
        </Styled.Control>
      )}
    </Styled.Root>
  );
}

export default XZKUIBoard;
