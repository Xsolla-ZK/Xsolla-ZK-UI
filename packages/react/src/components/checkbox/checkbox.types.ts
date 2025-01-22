import type { checkboxThemeSizes } from './checkbox.theme';
import type { XZKUICustomColor } from '@xsolla-zk-ui/react/types/theme';
import type { InputHTMLAttributes, ReactNode } from 'react';

type Sizes = (typeof checkboxThemeSizes)[number];

export interface XZKUICheckboxBaseProps {
  bg?: XZKUICustomColor;
  size: Sizes;
}

export type XZKUICheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> &
  Partial<XZKUICheckboxBaseProps> & {
    label?: ReactNode;
  };
