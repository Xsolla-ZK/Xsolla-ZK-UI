import type { useIconsPosition } from '../hooks/use-icons-position';
import type { IconComponent, IconProps } from '@xsolla-zk/ui-primitives';
import type { ReactNode } from 'react';
export type XORIconProps = Omit<IconProps, 'children'> & ({
    children?: never;
    icon: IconComponent;
} | {
    children: ReactNode;
    icon?: never;
});
export type IconsPosition = ReturnType<typeof useIconsPosition>;
//# sourceMappingURL=icon.d.ts.map