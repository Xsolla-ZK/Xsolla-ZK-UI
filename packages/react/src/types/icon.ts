import type { IconProps } from '@tamagui/helpers-icon';
import type { ReactNode } from 'react';
import type { NamedExoticComponent } from 'react';

type IconProp = NamedExoticComponent<IconProps>;

export type XORIconProps =
  | {
      children?: never;
      icon: IconProp;
    }
  | {
      children: ReactNode;
      icon?: never;
    };
