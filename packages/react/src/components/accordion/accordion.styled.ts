import { Collapsible } from '@tamagui/collapsible';
import { Stack } from '@tamagui/core';
import {
  ACCORDION_ITEM_COMPONENT_NAME,
  ACCORDION_TRIGGER_COMPONENT_NAME,
} from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles, smartContextStyled } from '../../utils';
import type { AccordionImplContextValue, AccordionSizes } from './accordion.types';
import type { VariantSpreadExtras } from '@tamagui/core';

export const AccordionItemFrame = smartContextStyled(Collapsible, {
  name: ACCORDION_ITEM_COMPONENT_NAME,

  overflow: 'hidden',

  variants: {
    withBoard: {
      true: {},
      false: {},
    },
    size: (val: AccordionSizes, extras) => {
      const { props } = extras as VariantSpreadExtras<Pick<AccordionImplContextValue, 'withBoard'>>;
      if (!props.withBoard) {
        return {};
      }
      const config = getComponentsConfig();
      const componentProps = config.accordion.board[val as keyof typeof config.accordion.board];

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

export const AccordionTriggerFrame = smartContextStyled(Collapsible.Trigger, {
  name: ACCORDION_TRIGGER_COMPONENT_NAME,
  flexDirection: 'row',
  cursor: 'pointer',

  defaultVariants: {},
});

export const AccordionHeaderFrame = smartContextStyled(Stack, {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  userSelect: 'none',

  variants: {
    withBoard: {
      true: {},
      false: {},
    },
    size: (val: AccordionSizes, extras) => {
      const { props } = extras as VariantSpreadExtras<Pick<AccordionImplContextValue, 'withBoard'>>;
      const config = getComponentsConfig();
      const componentProps = config.accordion.size[val as keyof typeof config.accordion.size];
      const boardProps = config.accordion.board[val as keyof typeof config.accordion.board];
      if (!componentProps || (props.withBoard && !boardProps)) {
        return {};
      }
      return {
        ...getMappedStyles(componentProps.header),
        ...(props.withBoard ? getMappedStyles(boardProps.frame) : {}),
      };
    },
  } as const,
});

export const AccordionContentFrame = smartContextStyled(Collapsible.Content, {
  variants: {
    withBoard: {
      true: {},
      false: {},
    },
    size: (val: AccordionSizes, extras) => {
      const { props } = extras as VariantSpreadExtras<Pick<AccordionImplContextValue, 'withBoard'>>;
      if (!props.withBoard) {
        return {};
      }
      const config = getComponentsConfig();
      const componentProps = config.accordion.board[val as keyof typeof config.accordion.board];

      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.frame);
    },
  } as const,

  defaultVariants: {},
});
