// function Board({ children, className, bg, isClosable }: XZKUIBoardProps) {
//   const [show, setShow] = useState(true);
//   const handleHideBanner = () => setShow(false);

import { BoardFrame, BoardOverlay } from './board.styled';
import type { BoardProps } from './board.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

//   if (!show) return null;

//   return (
//     <Styled.Root
//       xzkuiBg={bg}
//       className={clsx(className, [isClosable && xzkuiBoardClasses.isClosable])}
//     >
//       {children}
//       {isClosable && (
//         <Styled.Control
//           component="button"
//           size={200}
//           bg={({ theme }) => theme.overlay.neutral}
//           onClick={handleHideBanner}
//         >
//           <XZKUISvgIcon icon={SvgCross} />
//         </Styled.Control>
//       )}
//     </Styled.Root>
//   );
// }

const Board = BoardFrame.styleable<BoardProps>(
  ({ children, ...props }, ref: ForwardedRef<TamaguiElement>) => (
    <BoardFrame group={props.pressable} {...props} ref={ref}>
      {props.pressable && <BoardOverlay />}
      {children}
    </BoardFrame>
  ),
);

export default Board;
