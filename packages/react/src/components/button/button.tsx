import { forwardRef, type ElementType } from 'react';
import Styled from './button.styled';
import type { XZKUIButtonProps } from './button.types';
import type { ForwardedRef } from 'react';

const XZKUIButton = forwardRef(function XZKUIButton<T extends ElementType>(
  { as, size = 'md', variant = 'primary', ...props }: XZKUIButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const RootComponent = props.href || props.to ? 'a' : (as ?? 'button');
  return (
    <Styled.Main
      slots={{ root: RootComponent }}
      size={size}
      variant={variant}
      {...props}
      ref={ref}
    />
  );
});

// function KK() {
//   return <XZKUIButton onClick />;
// }

export default XZKUIButton;
