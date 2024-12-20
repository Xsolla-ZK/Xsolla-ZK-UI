import Styled from './button.styled';
import type { XZKUIButtonProps } from './button.types';

function XZKUIButton({ children, ...rest }: XZKUIButtonProps) {
  return <Styled.Main {...rest}>{children}</Styled.Main>;
}

export default XZKUIButton;
