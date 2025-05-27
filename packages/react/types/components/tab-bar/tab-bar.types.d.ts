import type { TabBarFrame } from './tab-bar.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps } from '@tamagui/core';
import type { ReactNode } from 'react';
export type TabBarSize = keyof ComponentsConfig['tabBar'];
export type TabBarContextType = {
    size: TabBarSize;
};
export type TabBarSharedProps = GetProps<typeof TabBarFrame>;
export type TabBarLabelPosition = 'beside-icon' | 'below-icon';
export interface TabBarProps extends TabBarSharedProps {
    state: {
        index: number;
        routes: Array<{
            name: string;
            key: string;
        }>;
    };
    descriptors: {
        [key: string]: {
            options: {
                tabBarShowLabel?: boolean;
                tabBarLabel?: string | ((props: {
                    focused: boolean;
                    color: string;
                    position: TabBarLabelPosition;
                    children: string;
                }) => ReactNode);
                tabBarLabelPosition?: TabBarLabelPosition;
                tabBarIcon?: (props: {
                    focused: boolean;
                    color: string;
                    size: number;
                }) => ReactNode;
                tabBarBadge?: number | string;
                title?: string;
            };
        };
    };
    navigation: {
        navigate?: any;
        emit?: any;
    };
}
//# sourceMappingURL=tab-bar.types.d.ts.map