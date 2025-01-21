import { css } from '@emotion/react';
import clsx from 'clsx';
import xzkuiSeparatorClasses from './separator.classes';
import Styled from './separator.styled';
import type { XZKUISeparatorProps } from './separator.types';

function XZKUISeparator({
  color,
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
      css={css`
        ${calcValue('margin-top', mt || my)};
        ${calcValue('margin-bottom', mb || my)};
        ${calcValue('margin-left', ml || mx)};
        ${calcValue('margin-right', mr || mx)};
      `}
      className={clsx([className, vertical && xzkuiSeparatorClasses.vertical])}
      {...props}
    />
  );
}

function calcValue(key: string, value?: string | number) {
  return value ? `${key}: ${typeof value === 'string' ? value : value + 'px'};` : undefined;
}

export default XZKUISeparator;
