import type buttonTheme from './button.theme';
import type { buttonThemeSizes } from './button.theme';
import type { ButtonProps as MuiButtonProps } from '@mui/base';
import type { ElementType, ReactNode } from 'react';

type Sizes = (typeof buttonThemeSizes)[number];
type Variants = keyof ReturnType<typeof buttonTheme>['variants'];

export interface XZKUIButtonBaseProps {
  size: Sizes;
  variant: Variants;
}

export interface XZKUIButtonProps extends MuiButtonProps, Partial<XZKUIButtonBaseProps> {
  isLoading?: ReactNode;
  bgOff?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  fullWidth?: boolean;
}

export type ComponentButtonTypeMap<P = object, D extends ElementType = 'button'> = {
  props: P & XZKUIButtonProps;
  defaultComponent: D;
};
