import type { NavBarFrame } from './nav-bar.styled';
import type { GetProps } from '@tamagui/core';
import type { IconProp } from '@xsolla-zk/react/types/icon';
import type { ComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import type { ReactNode } from 'react';

export type NavBarSizes = keyof ComponentsConfig['navBar']['size'];

export type NavBarContextType = {
  size: NavBarSizes;
};

export type NavBarSharedProps = GetProps<typeof NavBarFrame>;

export interface NavBarProps extends NavBarSharedProps {
  title?: string | ReactNode;
  showBackButton?: boolean;
  onBackPress?: () => void;
  backButtonLabel?: string;
  backButtonIcon?: IconProp;
  headerRight?: ReactNode;
  headerLeft?: ReactNode;
  navigation?: {
    goBack?: () => void;
    canGoBack?: () => boolean;
  };
  route?: {
    name?: string;
    key?: string;
    params?: Record<string, unknown>;
  };
}
