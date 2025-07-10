import type { useIconsPosition } from '../hooks/use-icons-position';
import type { IconProps } from '@tamagui/helpers-icon';
import type { NamedExoticComponent, ReactNode } from 'react';
export type IconProp = NamedExoticComponent<IconProps>;
export type XORIconProps = ({
    children?: never;
    icon: IconProp;
} | {
    children: ReactNode;
    icon?: never;
}) & IconProps;
export type IconsPosition = ReturnType<typeof useIconsPosition>;
//# sourceMappingURL=icon.d.ts.map