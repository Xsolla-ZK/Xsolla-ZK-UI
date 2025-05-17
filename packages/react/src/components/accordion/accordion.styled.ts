import { Collapsible } from '@tamagui/collapsible';
import { Stack, styled } from '@tamagui/core';
import { getComponentsConfig, getMappedStyles } from '@xsolla-zk/react/utils';
import {
  ACCORDION_ITEM_COMPONENT_NAME,
  ACCORDION_TRIGGER_COMPONENT_NAME,
} from './accordion.constants';
import type { AccordionSizes } from './accordion.types';

export const AccordionItemFrame = styled(Collapsible, {
  name: ACCORDION_ITEM_COMPONENT_NAME,

  variants: {
    size: (val: AccordionSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.accordion.board[val];

      if (!componentProps) {
        return {};
      }
      const { borderRadius } = getMappedStyles(componentProps.frame);
      return {
        borderRadius,
      };
    },
  } as const,
});

export const AccordionTriggerFrame = styled(Collapsible.Trigger, {
  name: ACCORDION_TRIGGER_COMPONENT_NAME,
  flexDirection: 'row',
  cursor: 'pointer',

  defaultVariants: {},
});

export const AccordionHeaderFrame = styled(Stack, {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    size: (val: AccordionSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.accordion.size[val];
      const boardProps = config.accordion.board[val];
      if (!componentProps || !boardProps) {
        return {};
      }
      return {
        ...getMappedStyles(componentProps.header),
        ...getMappedStyles(boardProps.frame),
      };
    },
  } as const,
});

export const AccordionContentFrame = styled(Collapsible.Content, {
  variants: {
    size: (val: AccordionSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.accordion.board[val];

      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.frame);
    },
  } as const,

  defaultVariants: {},
});
