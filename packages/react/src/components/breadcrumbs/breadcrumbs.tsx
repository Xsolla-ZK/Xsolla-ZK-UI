import { withStaticProperties } from '@tamagui/core';
import { BreadcrumbsFrame, BreadcrumbsItem } from './breadcrumbs.styled';

const Breadcrumbs = withStaticProperties(BreadcrumbsFrame, {
  Item: BreadcrumbsItem,
});

export default Breadcrumbs;
