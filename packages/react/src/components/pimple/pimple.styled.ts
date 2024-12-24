import styled from '@emotion/styled';
import type { XZKUIPimpleProps } from './pimple.types';

const Main = styled('div')<XZKUIPimpleProps>(
  ({ theme, size = 20 }) => `
    min-width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
  `,
);

const XZKUIPimpleStyled = {
  Main,
};

export default XZKUIPimpleStyled;
