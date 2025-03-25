import { createStyledContext, ScopedProps, Stack, styled, Text } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { getMappedProps } from '@xsolla-zk-ui/react/utils/get-mapped-props';
import { TABS_COMPONENT_NAME } from './tabs.constants';
import type { TabsContextType, TabsSizes } from './tabs.types';

export const TabsContext = createStyledContext<TabsContextType>({
  size: '$500',
});

export const TabsFrame = styled(Stack, {
  name: TABS_COMPONENT_NAME,
  context: TabsContext,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflow: 'hidden',
});

export const TabsList = styled(Stack, {
  name: TABS_COMPONENT_NAME,
  context: TabsContext,
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  borderBottomWidth: 1,
  borderStyle: 'solid',
  borderBottomColor: '$border.neutral-secondary',

  variants: {
    size: (val: TabsSizes) => {
      const config = getComponentsConfig();
      const tabs = config.tabs[val]?.list;

      if (!tabs) return {};

      return getMappedProps(tabs);
    },
  },
});

export const TabsTabFrame = styled(Stack, {
  name: TABS_COMPONENT_NAME,
  context: TabsContext,
  tag: 'button',
  role: 'tab',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  background: 'none',
  borderWidth: 0,
  cursor: 'pointer',
  userSelect: 'none',

  variants: {
    size: (val: TabsSizes) => {
      const config = getComponentsConfig();
      const tabs = config.tabs[val]?.tab;

      if (!tabs) return {};

      return getMappedProps(tabs);
    },
    selected: {
      true: {},
    },
    disabled: {
      true: {
        textDecoration: 'line-through',
        cursor: 'not-allowed',
      },
    },
  } as const,
});

export const TabsTriggerFrame = styled(Stack, {
  name: TABS_COMPONENT_NAME,
  tag: 'button',

  borderWidth: 0,
  backgroundColor: '$background',
  userSelect: 'none',
  justifyContent: 'center',
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
    size: {},

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

export const TabPanel = styled(Stack, {
  name: 'TabPanel',
  context: TabsContext,
  role: 'tabpanel',
  flex: 1,

  variants: {
    hidden: {
      true: {
        display: 'none',
      },
    },
  },
});
