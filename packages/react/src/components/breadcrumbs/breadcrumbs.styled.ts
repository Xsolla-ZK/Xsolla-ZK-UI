import { Stack, styled } from '@tamagui/core';
import {
  createStyledMediaContext,
  getComponentsConfig,
  getMappedStyles,
  smartContextStyled,
} from '../../utils';
import { FlexButton } from '../flex-button/flex-button';
import type { BreadcrumbsContextType, BreadcrumbsSizes } from './breadcrumbs.types';

export const BREADCRUMBS_COMPONENT_NAME = 'Breadcrumbs';

export const BreadcrumbsContext = createStyledMediaContext(
  {
    size: '$500',
  } as BreadcrumbsContextType,
  ['size'],
);

export const BreadcrumbsFrame = smartContextStyled(Stack, {
  name: BREADCRUMBS_COMPONENT_NAME,
  // context: BreadcrumbsContext,

  flexDirection: 'row',
  alignItems: 'center',

  variants: {
    size: (val: BreadcrumbsSizes) => {
      const config = getComponentsConfig();
      const breadcrumbs = config.breadcrumbs[val as keyof typeof config.breadcrumbs];

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
