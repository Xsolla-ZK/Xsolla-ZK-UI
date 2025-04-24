import type { useIconsPosition } from '../hooks/use-icons-position';
import type { IconProps } from '@tamagui/helpers-icon';
import type { ReactNode } from 'react';
import type { NamedExoticComponent } from 'react';

export type IconProp = NamedExoticComponent<IconProps>;

export type XORIconProps = (
  | {
      children?: never;
      icon: IconProp;
    }
  | {
      children: ReactNode;
      icon?: never;
    }
) &
  IconProps;

export type IconsPosition = ReturnType<typeof useIconsPosition>;
