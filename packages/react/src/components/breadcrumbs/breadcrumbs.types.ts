import type { BreadcrumbsFrame } from './breadcrumbs.styled';
import type { GetProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import type { ReactNode } from 'react';

export type BreadcrumbsSizes = keyof ComponentsConfig['breadcrumbs'];

export type BreadcrumbsContextType = {
  size: BreadcrumbsSizes;
};

export type BreadcrumbsSharedProps = GetProps<typeof BreadcrumbsFrame>;
export type BreadcrumbsItemSharedProps = GetProps<typeof BreadcrumbsFrame>;

export interface BreadcrumbsProps extends BreadcrumbsSharedProps {
  /** The icon to be used as a delimiter */
  delimiter: ReactNode;
}

export interface BreadcrumbsItemProps extends BreadcrumbsItemSharedProps {}
