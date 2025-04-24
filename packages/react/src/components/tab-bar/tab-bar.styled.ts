import { createStyledContext, Stack, Text } from '@tamagui/core';
import { styled } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { createIconComponent } from '@xsolla-zk-ui/react/utils/create-icon-component';
import { getMappedStyles } from '@xsolla-zk-ui/react/utils/get-mapped-styles';
import { Board } from '../board/board';
import {
  TAB_BAR_COMPONENT_NAME,
  TAB_BAR_ITEM_COMPONENT_NAME,
  TAB_BAR_ITEM_ICON_COMPONENT_NAME,
  TAB_BAR_ITEM_TITLE_COMPONENT_NAME,
} from './tab-bar.constants';
import type { TabBarContextType, TabBarSize } from './tab-bar.types';

export const TabBarContext = createStyledContext<TabBarContextType>({
  size: '$500',
});

export const TabBarFrame = styled(Stack, {
  name: TAB_BAR_COMPONENT_NAME,

  flexDirection: 'row',
  maxWidth: '100%',
});

export const TabBarItem = styled(Board, {
  name: TAB_BAR_ITEM_COMPONENT_NAME,
  pressable: true,

  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',

  variants: {
    size: (val: TabBarSize) => {
      const config = getComponentsConfig();
      const componentProps = config.tabBar[val];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.tab);
    },
    vertical: {
      true: {
        flexDirection: 'column',
      },
      false: {
        flexDirection: 'row',
      },
    },
  } as const,
});

export const TabBarItemTitle = styled(Text, {
  name: TAB_BAR_ITEM_TITLE_COMPONENT_NAME,
  context: TabBarContext,

  variants: {
    size: (val: TabBarSize) => {
      const config = getComponentsConfig();
      const componentProps = config.tabBar[val];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.label);
    },
  } as const,
});

export const TabBarItemIcon = createIconComponent(
  TAB_BAR_ITEM_ICON_COMPONENT_NAME,
  TabBarContext,
  'tabBar',
);
