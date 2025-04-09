import type { TabsContentFrame, TabsFrame, TabsTabFrame } from './tabs.styled';
import type { GetProps, StylableComponent, VariantSpreadExtras } from '@tamagui/core';
import type { GroupProps } from '@tamagui/group';
import type { RovingFocusGroup } from '@tamagui/roving-focus';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import type { ComponentPropsWithoutRef } from 'react';
import type { LayoutRectangle } from 'react-native';

export type TabsSizes = keyof ComponentsConfig['tabs'];
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
  registerTab: () => void;
  unregisterTab: () => void;
  tabsCount: number;
  activeTabLayout?: TabLayout;
  selectActiveTabLayout: (layout: TabLayout) => void;
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
export type TabsTabSharedProps = GetProps<typeof TabsTabFrame>;

export type TabsProps<Tab = string> = TabsSharedProps & TabsExtraProps<Tab>;

export type TabLayout = LayoutRectangle;
export type TabInteractionType = 'select' | 'focus' | 'hover';

export type TabsTabProps = TabsTabSharedProps & {
  /** The value for the tabs state to be changed to after activation of the tab */
  value: string;

  /** Used for making custom indicators when tab interacted with */
  onInteraction?: (type: TabInteractionType, layout: TabLayout | null) => void;

  /** Disables setting the active theme when tab is active */
  disableActiveTheme?: boolean;
};

type TabsContentFrameProps = GetProps<typeof TabsContentFrame>;

type TabsContentExtraProps = {
  /** Will show the content when the value matches the state of Tabs root */
  value: string;

  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Tamagui animations.
   */
  forceMount?: true;
};

export type TabsContentProps = TabsContentFrameProps & TabsContentExtraProps;

export type TabsListProps = GroupProps & {
  /**
   * Whether to loop over after reaching the end or start of the items
   * @default true
   */
  loop?: boolean;
};
