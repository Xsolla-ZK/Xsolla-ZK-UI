import type { ButtonRoot } from './button.styled';
import type { GetProps } from '@tamagui/core';

type ButtonSharedProps = GetProps<typeof ButtonRoot>;

export interface ButtonProps extends ButtonSharedProps {
  fullWidth?: boolean;
}
