import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { getMappedProps } from '@xsolla-zk-ui/react/utils/get-mapped-props';
import type { BreadcrumbsContextType } from './breadcrumbs.types';
import type { BreadcrumbsSizes } from './breadcrumbs.types';

export const BREADCRUMBS_COMPONENT_NAME = 'Breadcrumbs';

export const BreadcrumbsContext = createStyledContext<BreadcrumbsContextType>({
  size: '$500',
});

export const BreadcrumbsFrame = styled(Stack, {
  name: BREADCRUMBS_COMPONENT_NAME,
  context: BreadcrumbsContext,
  variants: {
    size: (val: BreadcrumbsSizes) => {
      const config = getComponentsConfig();
      const breadcrumbs = config.breadcrumbs[val];

      if (!breadcrumbs) return {};

      return getMappedProps(breadcrumbs.frame);
    },
  },
  defaultVariants: {
    size: '$500',
  },
});

export const BreadcrumbsItem = styled(Text, {
  name: BREADCRUMBS_COMPONENT_NAME,
  context: BreadcrumbsContext,
  tag: 'a',

  userSelect: 'none',
  cursor: 'pointer',

  variants: {
    size: (val: BreadcrumbsSizes) => {
      const config = getComponentsConfig();
      const breadcrumbs = config.breadcrumbs[val];

      if (!breadcrumbs) return {};

      return getMappedProps(breadcrumbs.item);
    },
    active: {
      true: {
        tag: 'span',
      },
    },
  },
  defaultVariants: {
    size: '$500',
    active: false,
  },
});
