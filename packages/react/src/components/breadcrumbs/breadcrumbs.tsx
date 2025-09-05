import { withStaticProperties } from '@tamagui/core';
import { Fragment, cloneElement, isValidElement } from 'react';
import { useChildrenArray } from '../../hooks';
import { BreadcrumbsContext, BreadcrumbsFrame, BreadcrumbsItem } from './breadcrumbs.styled';
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
              ...(child.props as BreadcrumbsItemProps),
            } as BreadcrumbsItemProps)
          : child}
        {index < childrenArray.length - 1 && delimiter}
      </Fragment>
    ));

    return (
      <BreadcrumbsContext.Provider componentProps={props}>
        <BreadcrumbsFrame {...props} ref={ref}>
          {childrensWithDelimiters}
        </BreadcrumbsFrame>
      </BreadcrumbsContext.Provider>
    );
  },
);

export const Breadcrumbs = withStaticProperties(BreadcrumbsComponent, {
  Item: BreadcrumbsItem,
});
