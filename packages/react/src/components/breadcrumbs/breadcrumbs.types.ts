import type { BreadcrumbsFrame } from './breadcrumbs.styled';
import type { GetProps } from '@tamagui/core';
import type { IconProp } from '@xsolla-zk-ui/react/types/icon';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';

export type BreadcrumbsSizes = keyof ComponentsConfig['breadcrumbs'];

export type BreadcrumbsContextType = {
  size: BreadcrumbsSizes;
};

export type BreadcrumbsSharedProps = GetProps<typeof BreadcrumbsFrame>;
export type BreadcrumbsItemSharedProps = GetProps<typeof BreadcrumbsFrame>;

export interface BreadcrumbsProps extends BreadcrumbsSharedProps {
  /** The icon to be used as a delimiter */
  iconDelimiter: IconProp;
}

export interface BreadcrumbsItemProps extends BreadcrumbsItemSharedProps {}
