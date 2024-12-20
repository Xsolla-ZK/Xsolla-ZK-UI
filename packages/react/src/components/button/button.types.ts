import type buttonTheme from './button.theme';
import type { buttonThemeSizes } from './button.theme';
import type { ButtonProps as MuiButtonProps } from '@mui/base';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

type Sizes = (typeof buttonThemeSizes)[number];
type Variants = keyof ReturnType<typeof buttonTheme>['variants'];

export type XZKUIButtonProps<T extends ElementType = 'button'> = MuiButtonProps &
  ComponentPropsWithoutRef<T> & {
    as?: T;
    size?: Sizes;
    variant?: Variants;
  };
// {
//   // size?: ButtonSizes;
//   // variant?: keyof TTheme['button'];
//   Style="Primary";
//   Size="700 [64]";
//   State="Default";
//   has Background=True;
//   has Label=true;
//   has Icon Left=true;
//   has Icon Right=false;
//   Label="Label";
//   iconLeft="plus";
//   iconRight="plus";

// }
