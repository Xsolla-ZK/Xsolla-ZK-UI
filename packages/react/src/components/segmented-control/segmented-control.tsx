import type { XZKUISegmentedControlProps } from './segmented-control.types';
import Styled from './segmented-control.styled';

function XZKUISegmentedControl({ children }: XZKUISegmentedControlProps) {
  return (
    <Styled.Main>{children}</Styled.Main>
  );
}

export default XZKUISegmentedControl;
