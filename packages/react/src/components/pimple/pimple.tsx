import clsx from 'clsx';
import { isValidElement } from 'react';
import xzkuiPimpleClasses from './pimple.classes';
import Styled from './pimple.styled';
import type { XZKUIPimpleProps } from './pimple.types';

function XZKUIPimple({ children, className, size = 500 }: XZKUIPimpleProps) {
  return (
    <Styled.Main
      className={clsx([
        className,
        isValidElement(children) &&
          Object.prototype.hasOwnProperty.call(children.props, 'icon') &&
          xzkuiPimpleClasses.withIcon,
      ])}
      xzkuiSize={size}
    >
      {size > 200 ? children : null}
    </Styled.Main>
  );
}

export default XZKUIPimple;
