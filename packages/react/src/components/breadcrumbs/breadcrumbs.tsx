import { withStaticProperties } from '@tamagui/core';
import useChildrenArray from '@xsolla-zk-ui/react/hooks/use-children-array';
import { Fragment, cloneElement, isValidElement } from 'react';
import { BreadcrumbsFrame, BreadcrumbsItem } from './breadcrumbs.styled';
import type { BreadcrumbsItemProps, BreadcrumbsProps } from './breadcrumbs.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const BreadcrumbsComponent = BreadcrumbsFrame.styleable<BreadcrumbsProps>(
  ({ children, delimiter, ...props }, ref: ForwardedRef<TamaguiElement>) => {
    const childrenArray = useChildrenArray(children);

    const childrensWithDelimiters = childrenArray.map((child, index) => (
      <Fragment key={index}>
        {isValidElement(child) && child.type === BreadcrumbsItem
          ? cloneElement(child, {
              active: index === childrenArray.length - 1,
              ...child.props,
            } as BreadcrumbsItemProps)
          : child}
        {index < childrenArray.length - 1 && delimiter}
      </Fragment>
    ));

    return (
      <BreadcrumbsFrame {...props} ref={ref}>
        {childrensWithDelimiters}
      </BreadcrumbsFrame>
    );
  },
);

const Breadcrumbs = withStaticProperties(BreadcrumbsComponent, {
  Item: BreadcrumbsItem,
});

export default Breadcrumbs;
