import { createStyledContext, Stack, styled } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { getMappedStyles } from '@xsolla-zk-ui/react/utils/get-mapped-styles';
import { FlexButton } from '../flex-button/flex-button';
import type { BreadcrumbsContextType } from './breadcrumbs.types';
import type { BreadcrumbsSizes } from './breadcrumbs.types';

export const BREADCRUMBS_COMPONENT_NAME = 'Breadcrumbs';

export const BreadcrumbsContext = createStyledContext<BreadcrumbsContextType>({
  size: '$500',
});

export const BreadcrumbsFrame = styled(Stack, {
  name: BREADCRUMBS_COMPONENT_NAME,
  context: BreadcrumbsContext,

  flexDirection: 'row',
  alignItems: 'center',

  variants: {
    size: (val: BreadcrumbsSizes) => {
      const config = getComponentsConfig();
      const breadcrumbs = config.breadcrumbs[val];

      if (!breadcrumbs) return {};

      return getMappedStyles(breadcrumbs.frame);
    },
  },
  defaultVariants: {
    size: '$500',
  },
});

const Item = styled(FlexButton, {
  tag: 'a',
  role: 'link',
  tone: 'neutral',

  userSelect: 'none',
  cursor: 'pointer',

  variants: {
    active: {
      true: {
        tag: 'span',
        cursor: 'default',
        pointerEvents: 'none',
        color: '$content.neutral-tertiary',
      },
    },
  } as const,
  defaultVariants: {
    active: false,
  },
});

export const BreadcrumbsItem = Object.assign(Item, {
  Text: FlexButton.Text,
});
