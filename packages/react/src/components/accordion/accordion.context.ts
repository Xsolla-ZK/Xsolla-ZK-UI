import { createStyledContext } from '@tamagui/core';
import type {
  AccordionImplContextValue,
  AccordionItemContextValue,
  AccordionValueContextValue,
} from './accordion.types';

export const AccordionImplContext = createStyledContext<AccordionImplContextValue>();

export const AccordionValueContext = createStyledContext<AccordionValueContextValue>();

export const AccordionCollapsibleContext = createStyledContext();

export const AccordionItemContext = createStyledContext<AccordionItemContextValue>();
