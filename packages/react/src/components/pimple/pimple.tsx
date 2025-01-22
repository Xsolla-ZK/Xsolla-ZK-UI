import clsx from 'clsx';
import { isValidElement } from 'react';
import xzkuiPimpleClasses from './pimple.classes';
import Styled from './pimple.styled';
import type { XZKUIPimpleProps } from './pimple.types';

function XZKUIPimple({ children, className, size = 500 }: XZKUIPimpleProps) {
  return (
    <Styled.Root
      className={clsx([
        className,
        isValidElement(children) &&
          Object.prototype.hasOwnProperty.call(children.props, 'icon') &&
          xzkuiPimpleClasses.withIcon,
      ])}
      xzkuiSize={size}
    >
      {size > 200 ? children : null}
    </Styled.Root>
  );
}

export default XZKUIPimple;
