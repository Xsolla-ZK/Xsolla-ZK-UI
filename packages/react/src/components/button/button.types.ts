import type Button from './button.styled';
import type { GetProps } from '@tamagui/core';
import type { ReactNode } from 'react';

type ButtonSharedProps = GetProps<typeof Button>;

export interface ButtonProps extends ButtonSharedProps {
  isLoading?: ReactNode;
  fullWidth?: boolean;
}
