import type {
  AccordionContentFrame,
  AccordionHeaderFrame,
  AccordionItemFrame,
  AccordionTriggerFrame,
} from './accordion.styled';
import type { ComponentsConfig } from '../../utils';
import type { Collapsible } from '@tamagui/collapsible';
import type { GetProps, GetRef, Stack } from '@tamagui/core';
import type { AriaAttributes, ComponentPropsWithoutRef, ComponentRef, ReactNode } from 'react';

export type AccordionSizes = keyof ComponentsConfig['accordion']['board'] | (string & {});

export type AccordionScopedProps<P> = P & { __scopeAccordion?: string };

export type AccordionImplContextValue = {
  disabled?: boolean;
  direction: AccordionImplProps['dir'];
  orientation: AccordionImplProps['orientation'];
  size: AccordionSizes;
  withBoard: boolean;
};

export type AccordionItemContextValue = { open?: boolean; disabled?: boolean; triggerId: string };

type Direction = 'ltr' | 'rtl';

export type AccordionItemElement = ComponentRef<typeof Collapsible>;
export type CollapsibleProps = ComponentPropsWithoutRef<typeof Collapsible>;

export type AccordionTrigger = GetRef<typeof AccordionTriggerFrame>;
export type AccordionTriggerProps = GetProps<typeof AccordionTriggerFrame> & {
  children?: ((props: { open: boolean }) => ReactNode) | ReactNode;
};

export interface AccordionSingleProps extends AccordionImplSingleProps {
  type: 'single';
}
export interface AccordionMultipleProps extends AccordionImplMultipleProps {
  type: 'multiple';
}

export type AccordionValueContextValue = {
  value: string[];
  onItemOpen: (value: string) => void;
  onItemClose: (value: string) => void;
};

export type AccordionProps = AccordionSingleProps | AccordionMultipleProps;

export interface AccordionImplSingleProps extends AccordionImplProps {
  /**
   * The controlled stateful value of the accordion item whose content is expanded.
   */
  value?: string;
  /**
   * The value of the item whose content is expanded when the accordion is initially rendered. Use
   * `defaultValue` if you do not need to control the state of an accordion.
   */
  defaultValue?: string;
  /**
   * The callback that fires when the state of the accordion changes.
   */
  onValueChange?: (value: string) => void;
  /**
   * Whether an accordion item can be collapsed after it has been opened.
   * @default false
   */
  toggleable?: boolean;
}

export interface AccordionImplMultipleProps extends AccordionImplProps {
  /**
   * The controlled stateful value of the accordion items whose contents are expanded.
   */
  value?: string[];
  /**
   * The value of the items whose contents are expanded when the accordion is initially rendered. Use
   * `defaultValue` if you do not need to control the state of an accordion.
   */
  defaultValue?: string[];
  /**
   * The callback that fires when the state of the accordion changes.
   */
  onValueChange?: (value: string[]) => void;
}

type PrimitiveDivProps = ComponentPropsWithoutRef<typeof AccordionItemFrame>;

export interface AccordionImplProps extends PrimitiveDivProps {
  /**
   * Whether or not an accordion is disabled from user interaction.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * The layout in which the Accordion operates.
   * @default vertical
   */
  orientation?: AriaAttributes['aria-orientation'];
  /**
   * The language read direction.
   */
  dir?: Direction;
  /**
   *  The callback that fires when the state of the accordion changes. for use with `useAccordion`
   * @param selected - The values of the accordion items whose contents are expanded.
   */
  control?: (selected: string[]) => void;

  /**
   * Web-only: The callback that fires when a key is pressed.
   */
  onKeyDown?: (event: KeyboardEvent) => void;
}

export interface AccordionItemProps
  extends Omit<CollapsibleProps, 'open' | 'defaultOpen' | 'onOpenChange'> {
  /**
   * Whether or not an accordion item is disabled from user interaction.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * A string value for the accordion item. All items within an accordion should use a unique value.
   */
  value: string;
}

export type AccordionHeaderElement = ComponentRef<typeof AccordionHeaderFrame>;
type PrimitiveHeading3Props = ComponentPropsWithoutRef<typeof AccordionHeaderFrame>;
export type AccordionHeaderProps = PrimitiveHeading3Props;

export type AccordionContentProps = GetProps<typeof AccordionContentFrame>;
