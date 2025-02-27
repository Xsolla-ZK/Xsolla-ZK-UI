import type { XZKUIRadioGroupProps } from './radio-group.types';
import Styled from './radio-group.styled';

function XZKUIRadioGroup({ children }: XZKUIRadioGroupProps) {
  return (
    <Styled.Root>{children}</Styled.Root>
  );
}

export default XZKUIRadioGroup;
