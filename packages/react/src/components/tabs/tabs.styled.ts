import { createStyledContext, Stack, styled } from '@tamagui/core';
import { Text } from '@tamagui/core';
import {
  TABS_COMPONENT_NAME,
  TABS_LIST_COMPONENT_NAME,
  TABS_LIST_INDICATOR_COMPONENT_NAME,
  TABS_PANEL_COMPONENT_NAME,
  TABS_TAB_COMPONENT_NAME,
} from '@xsolla-zk/constants';
import { createIconComponent, getComponentsConfig, getMappedStyles } from '../../utils';
import type { TabsContextType, TabsSizes } from './tabs.types';
import type { GetProps, VariantSpreadExtras } from '@tamagui/core';

export const TabsContext = createStyledContext<TabsContextType>({
  size: '$500',
  baseId: '',
  onChange: () => ({}),
  registerTab: () => ({}),
  unregisterTab: () => ({}),
  tabsCount: 0,
  setActiveTabLayout: () => ({}),
  containerRef: null,
});

export const TabsFrame = styled(Stack, {
  name: TABS_COMPONENT_NAME,
  context: TabsContext,
  display: 'flex',
  overflow: 'hidden',

  variants: {
    size: (_val: TabsSizes) => ({}),
    orientation: {
      horizontal: {
        flexDirection: 'column',
      },
      vertical: {
        flexDirection: 'row',
      },
    },
  } as const,
});

export const TabsListFrame = styled(Stack, {
  name: TABS_LIST_COMPONENT_NAME,

  position: 'relative',
  overflow: 'hidden',

  variants: {
    size: (val: TabsSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.tabs[val as keyof typeof config.tabs];

      if (!componentProps) return {};

      return getMappedStyles(componentProps.frame);
    },
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

export const TabsTabFrame = styled(Stack, {
  name: TABS_TAB_COMPONENT_NAME,
  tag: 'button',

  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  padding: 0,
  borderWidth: 0,
  backgroundColor: '$background',
  userSelect: 'none',
  cursor: 'pointer',

  // pressStyle: {
  //   backgroundColor: '$backgroundPress',
  // },

  // focusStyle: {
  //   backgroundColor: '$backgroundFocus',
  // },

  variants: {
    size: (val: TabsSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.tab[val as keyof typeof config.tab];

      if (!componentProps) return {};

      return getMappedStyles(componentProps.frame);
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

export const TabsTabContent = styled(Stack, {
  name: TABS_TAB_COMPONENT_NAME,
  padding: 4,
  borderRadius: '$300',
  // animation: 'colorChange',
  // animateOnly: ['background'],

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100%',

  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },
  focusStyle: {
    backgroundColor: '$backgroundHover',
  },
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

const reverseProps = {
  height: 'width',
  borderTopLeftRadius: 'borderBottomLeftRadius',
  borderTopRightRadius: 'borderTopLeftRadius',
  borderBottomRightRadius: 'borderTopRightRadius',
  borderBottomLeftRadius: 'borderBottomRightRadius',
} as const;

export const TabsListIndicator = styled(Stack, {
  name: TABS_LIST_INDICATOR_COMPONENT_NAME,
  context: TabsContext,
  position: 'absolute',
  backgroundColor: '$background',
  // animation: 'tabSwitch',
  // animateOnly: ['width', 'transform'],

  variants: {
    size: (val: TabsSizes, extras): ReturnType<typeof getMappedStyles> => {
      const { props } = extras as VariantSpreadExtras<
        GetProps<typeof Stack> & Pick<TabsContextType, 'orientation'>
      >;
      const config = getComponentsConfig();
      const componentProps = config.tab[val as keyof typeof config.tab];

      if (!componentProps) return {};

      return props.orientation === 'horizontal'
        ? getMappedStyles(componentProps.line)
        : Object.keys(reverseProps).reduce<ReturnType<typeof getMappedStyles>>((acc, curr) => {
            const key = reverseProps[curr as keyof typeof reverseProps];
            const mappedProps = getMappedStyles(componentProps.line);
            if (key && typeof mappedProps === 'object' && curr in mappedProps) {
              // @ts-ignore okay
              acc[key] = mappedProps[curr as keyof typeof mappedProps];
            }
            return acc;
          }, {});
    },
    orientation: {
      horizontal: {
        bottom: 0,
        left: 0,
      },
      vertical: {
        right: 0,
        top: 0,
      },
    },
  } as const,
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export const TabsTabText = styled(Text, {
  name: TABS_TAB_COMPONENT_NAME,
  context: TabsContext,

  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  color: '$color',

  variants: {
    size: (val: TabsSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.tab[val as keyof typeof config.tab];

      if (!componentProps) return {};

      return getMappedStyles(componentProps.label);
    },
  } as const,
});

export const TabsTabIcon = createIconComponent(TABS_TAB_COMPONENT_NAME, TabsContext, 'tab');
