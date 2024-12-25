import type buttonTheme from './button.theme';
import type { buttonThemeSizes } from './button.theme';
import type { ButtonProps as MuiButtonProps } from '@mui/base';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type Sizes = (typeof buttonThemeSizes)[number];
type Variants = keyof ReturnType<typeof buttonTheme>['variants'];

export interface XZKUIButtonBaseProps {
  size?: Sizes;
  variant?: Variants;
}

export type XZKUIButtonProps<T extends ElementType = 'button'> = MuiButtonProps &
  ComponentPropsWithoutRef<T> &
  XZKUIButtonBaseProps & {
    // Omit<JSX.IntrinsicElements['button'], 'ref'> & {
    as?: T;
    isLoading?: ReactNode;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    full?: boolean;
  };
