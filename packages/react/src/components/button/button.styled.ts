import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/base';
import type { XZKUIButtonProps } from './button.types';

const Main = styled(MuiButton)<XZKUIButtonProps>(
  ({ theme }) => `
    background: none;
    border: none;
  `,
  ({ theme, size = 'md' }) => theme.components.button.sizes[size],
  ({ theme, variant = 'primary' }) => theme.components.button.variants[variant],
);

const XZKUIButtonStyled = {
  Main,
};

export default XZKUIButtonStyled;
