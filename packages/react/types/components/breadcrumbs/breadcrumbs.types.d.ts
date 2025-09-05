import type { BreadcrumbsFrame, BreadcrumbsItem } from './breadcrumbs.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps } from '@tamagui/core';
import type { ReactNode } from 'react';
export type BreadcrumbsSizes = keyof ComponentsConfig['breadcrumbs'] | (string & {});
export type BreadcrumbsContextType = {
    size: BreadcrumbsSizes;
};
export type BreadcrumbsSharedProps = GetProps<typeof BreadcrumbsFrame>;
export type BreadcrumbsItemSharedProps = GetProps<typeof BreadcrumbsItem>;
export type BreadcrumbsProps = BreadcrumbsSharedProps & {
    /** The icon to be used as a delimiter */
    delimiter: ReactNode;
};
export type BreadcrumbsItemProps = BreadcrumbsItemSharedProps;
//# sourceMappingURL=breadcrumbs.types.d.ts.map