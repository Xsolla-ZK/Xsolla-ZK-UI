import Styled from './some-component.styled';
import type { XZKUISomeComponentProps } from './some-component.types';

function XZKUISomeComponent({ children }: XZKUISomeComponentProps) {
  return <Styled.Main>{children}</Styled.Main>;
}

export default XZKUISomeComponent;
