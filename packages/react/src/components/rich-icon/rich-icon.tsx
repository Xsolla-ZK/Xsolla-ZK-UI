import { forwardRef } from 'react';
import Styled, { richIconPaths } from './rich-icon.styled';
import type { XZKUIRichIconProps } from './rich-icon.types';
import type { ElementType, ForwardedRef } from 'react';

const XZKUIRichIcon = forwardRef(function XZKUIRichIcon<T extends ElementType = 'div'>(
  { shape = 'circle', children, backdropProps, as, ...rest }: XZKUIRichIconProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <Styled.Main {...rest} ref={ref}>
      <Styled.Icon width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
        <path d={richIconPaths[shape]} {...backdropProps} fill="currentColor" />
      </Styled.Icon>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Main>
  );
});

export default XZKUIRichIcon;
