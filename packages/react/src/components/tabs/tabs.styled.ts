import { createStyledContext, Stack, styled } from '@tamagui/core';
import { Text } from '@tamagui/core';
import { Group } from '@tamagui/group';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { createIconComponent } from '@xsolla-zk-ui/react/utils/create-icon-component';
import { getMappedProps } from '@xsolla-zk-ui/react/utils/get-mapped-props';
import {
  TABS_COMPONENT_NAME,
  TABS_LIST_COMPONENT_NAME,
  TABS_LIST_INDICATOR_COMPONENT_NAME,
  TABS_PANEL_COMPONENT_NAME,
  TABS_TAB_COMPONENT_NAME,
} from './tabs.constants';
import type { TabsContextType, TabsSizes } from './tabs.types';

export const TabsContext = createStyledContext<TabsContextType>({
  size: '$500',
  baseId: '',
  onChange: () => {},
  registerTab: () => {},
  unregisterTab: () => {},
  tabsCount: 0,
  selectActiveTabLayout: () => {},
});

export const TabsFrame = styled(Stack, {
  name: TABS_COMPONENT_NAME,
  context: TabsContext,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  variants: {
    size: (_val: TabsSizes) => ({}),
    orientation: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  } as const,
});

export const TabsListFrame = styled(Group, {
  name: TABS_LIST_COMPONENT_NAME,
  unstyled: true,

  position: 'relative',

  variants: {
    size: (val: TabsSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.tabs[val];

      if (!componentProps) return {};

      return getMappedProps(componentProps.frame);
    },
  } as const,
});

export const TabsTabFrame = styled(Stack, {
  name: TABS_TAB_COMPONENT_NAME,
  tag: 'button',

  padding: 0,
  borderWidth: 0,
  backgroundColor: '$background',
  userSelect: 'none',
  justifyContent: 'center',
  flex: 1,
  alignItems: 'center',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  cursor: 'pointer',

  pressStyle: {
    backgroundColor: '$backgroundPress',
  },

  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },

  focusStyle: {
    backgroundColor: '$backgroundFocus',
  },

  variants: {
    size: (val: TabsSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.tab[val];

      if (!componentProps) return {};

      return getMappedProps(componentProps.frame);
    },

    disabled: {
      true: {
        pointerEvents: 'none',
      },
    },

    active: {
      true: {
        hoverStyle: {
          backgroundColor: '$background',
        },

        focusStyle: {
          backgroundColor: '$background',
        },
      },
    },
  } as const,

  defaultVariants: {},
});

export const TabsContentFrame = styled(Stack, {
  name: TABS_PANEL_COMPONENT_NAME,
  context: TabsContext,
  role: 'tabpanel',
  flex: 1,

  variants: {
    hidden: {
      true: {
        display: 'none',
      },
    },
  } as const,
});

export const TabsListIndicator = styled(Stack, {
  name: TABS_LIST_INDICATOR_COMPONENT_NAME,
  context: TabsContext,
  position: 'absolute',
  bottom: 0,
  left: 0,
  backgroundColor: '$background',
  animation: 'state',
  animateOnly: ['width', 'transform'],

  variants: {
    size: (val: TabsSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.tab[val];

      if (!componentProps) return {};

      return getMappedProps(componentProps.line);
    },
  } as const,
});

export const TabsTabText = styled(Text, {
  name: TABS_TAB_COMPONENT_NAME,
  context: TabsContext,
  color: '$color',

  variants: {
    size: (val: TabsSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.tab[val];

      if (!componentProps) return {};

      return getMappedProps(componentProps.label);
    },
  } as const,
});

export const TabsTabIcon = createIconComponent(TABS_TAB_COMPONENT_NAME, TabsContext, 'tab');
