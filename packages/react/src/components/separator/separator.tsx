import clsx from 'clsx';
import xzkuiSeparatorClasses from './separator.classes';
import Styled from './separator.styled';
import type { XZKUISeparatorProps } from './separator.types';

function XZKUISeparator({
  color = 'neutralSecondary',
  weight = 1,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  vertical,
  className,
  ...props
}: XZKUISeparatorProps) {
  return (
    <Styled.Main
      xzkuiColor={color}
      xzkuiWeight={weight}
      xzkuiMt={mt}
      xzkuiMb={mb}
      xzkuiMl={ml}
      xzkuiMr={mr}
      xzkuiMx={mx}
      xzkuiMy={my}
      className={clsx([className, vertical && xzkuiSeparatorClasses.vertical])}
      {...props}
    />
  );
}

export default XZKUISeparator;
