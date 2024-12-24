import Styled from './pimple.styled';
import type { XZKUIPimpleProps } from './pimple.types';

function XZKUIPimple({ children }: XZKUIPimpleProps) {
  return <Styled.Main>{children}</Styled.Main>;
}

export default XZKUIPimple;
