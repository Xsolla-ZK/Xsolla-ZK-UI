import type { TabsFrame } from './tabs.styled';
import type { GetProps, StylableComponent, VariantSpreadExtras } from '@tamagui/core';
import type { RovingFocusGroup } from '@tamagui/roving-focus';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import type { ComponentPropsWithoutRef } from 'react';

export type TabsSizes = '$200' | '$300' | '$400' | '$500';
// export type TabsSizes = keyof ComponentsConfig['tabs'];
export type TabsVariantSpreadExtras<T extends StylableComponent> = VariantSpreadExtras<
  GetProps<T> & TabsContextType
>;

export type TabsContextType = {
  baseId: string;
  value?: string;
  onChange: (value: string) => void;
  orientation?: TabsProps['orientation'];
  dir?: TabsProps['dir'];
  activationMode?: TabsProps['activationMode'];
  size: TabsSizes;
  registerTrigger: () => void;
  unregisterTrigger: () => void;
  triggersCount: number;
};

type RovingFocusGroupProps = ComponentPropsWithoutRef<typeof RovingFocusGroup>;

export type TabsExtraProps<Tab = string> = {
  /** The value for the selected tab, if controlled */
  value?: string;
  /** The value of the tab to select by default, if uncontrolled */
  defaultValue?: Tab;
  /** A function called when a new tab is selected */
  onValueChange?: (value: Tab) => void;
  /**
   * The orientation the tabs are layed out.
   * Mainly so arrow navigation is done accordingly (left & right vs. up & down)
   * @defaultValue horizontal
   */
  orientation?: RovingFocusGroupProps['orientation'];
  /**
   * The direction of navigation between toolbar items.
   */
  dir?: RovingFocusGroupProps['dir'];
  /**
   * Whether a tab is activated automatically or manually. Only supported in web.
   * @defaultValue automatic
   * */
  activationMode?: 'automatic' | 'manual';
};

export type TabsSharedProps = GetProps<typeof TabsFrame>;

export type TabsProps<Tab = string> = TabsSharedProps & TabsExtraProps<Tab>;
