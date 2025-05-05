import type { radioThemeSizes } from './radio.theme';
import type { XZKUICustomColor } from '@xsolla-zk/react/types/theme';
import type { InputHTMLAttributes, ReactNode } from 'react';

type Sizes = (typeof radioThemeSizes)[number];

export interface XZKUIRadioBaseProps {
  bg?: XZKUICustomColor;
  color?: XZKUICustomColor;
  size: Sizes;
}

export type XZKUIRadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | keyof XZKUIRadioBaseProps
> &
  Partial<XZKUIRadioBaseProps> & {
    label?: ReactNode;
  };
