import { createStyledContext } from '@tamagui/core';
import { createStyledMediaContext } from '../../utils';
import type {
  AccordionImplContextValue,
  AccordionItemContextValue,
  AccordionValueContextValue,
} from './accordion.types';

export const AccordionImplContext = createStyledMediaContext(
  {
    size: 'medium',
    withBoard: false,
    orientation: 'vertical',
  } as AccordionImplContextValue,
  ['size', 'withBoard'],
);

export const AccordionValueContext = createStyledContext<AccordionValueContextValue>();

export const AccordionCollapsibleContext = createStyledContext();

export const AccordionItemContext = createStyledContext<AccordionItemContextValue>();
