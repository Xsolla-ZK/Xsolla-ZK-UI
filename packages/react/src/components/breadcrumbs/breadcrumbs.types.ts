import type { BreadcrumbsFrame } from './breadcrumbs.styled';
import type { GetProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';

export type BreadcrumbsSizes = keyof ComponentsConfig['breadcrumbs'];

export type BreadcrumbsContextType = {
  size: BreadcrumbsSizes;
};

export type BreadcrumbsSharedProps = GetProps<typeof BreadcrumbsFrame>;

export interface BreadcrumbsProps extends BreadcrumbsSharedProps {}
