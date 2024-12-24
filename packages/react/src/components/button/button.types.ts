import type buttonTheme from './button.theme';
import type { buttonThemeSizes } from './button.theme';
import type { ButtonProps as MuiButtonProps } from '@mui/base';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

type Sizes = (typeof buttonThemeSizes)[number];
type Variants = keyof ReturnType<typeof buttonTheme>['variants'];

export type XZKUIButtonProps<T extends ElementType = 'button'> = MuiButtonProps &
  ComponentPropsWithoutRef<T> & {
    // Omit<JSX.IntrinsicElements['button'], 'ref'> & {
    as?: T;
    size?: Sizes;
    variant?: Variants;
  };
