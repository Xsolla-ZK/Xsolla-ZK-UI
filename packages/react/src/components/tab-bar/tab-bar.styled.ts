import { Stack, Text } from '@tamagui/core';
import { TAB_BAR_COMPONENT_NAME, TAB_BAR_ITEM_COMPONENT_NAME } from '@xsolla-zk/constants';
import {
  createIconComponent,
  createStyledMediaContext,
  getComponentsConfig,
  getMappedStyles,
  processMediaValues,
  smartContextStyled,
} from '../../utils';
import { withBoardStyled } from '../board';
import type { TabBarContextType, TabBarSize } from './tab-bar.types';
import type { XORIconProps } from '../../types';
import type { IconProps } from '@xsolla-zk/ui-primitives';

export const TabBarContext = createStyledMediaContext(
  {
    size: '$500',
  } as TabBarContextType,
  ['size'],
);

export const TabBarFrame = smartContextStyled(Stack, {
  name: TAB_BAR_COMPONENT_NAME,

  flexDirection: 'row',
  maxWidth: '100%',
  variants: {
    size: (_val: TabBarSize) => ({}),
  } as const,
});

export const TabBarItem = withBoardStyled(
  {
    name: TAB_BAR_ITEM_COMPONENT_NAME,
    pressable: true,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    variants: {
      size: (val: TabBarSize) => {
        const componentsConfig = getComponentsConfig();
        const componentProps = componentsConfig.tabBar[val];

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
  },
  undefined,
  'tab-bar-item',
);

export const TabBarItemTitle = smartContextStyled(Text, {
  name: TAB_BAR_ITEM_COMPONENT_NAME,
  context: TabBarContext,
  color: '$color',

  variants: {
    size: (val: TabBarSize) => {
      const componentsConfig = getComponentsConfig();
      const componentProps = componentsConfig.tabBar[val];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.label);
    },
  } as const,
});

export const TabBarItemIcon = (props: XORIconProps) => {
  const ctx = TabBarContext.useStyledContext();

  const iconProps = processMediaValues(
    { size: ctx.size },
    {
      size: (val, { config }) => {
        const componentProps = config.tabBar[val as keyof typeof config.tabBar];

        if (!componentProps) {
          return {};
        }

        return {
          size: componentProps.icon.size,
        };
      },
    },
  ) as IconProps;

  return createIconComponent({ ...iconProps, color: '$color', ...props });
};
// {
//   getColorFn: (ctx) => {
//     const { selected } = ctx;
//     return selected ? '$content.brand-primary' : '$content.neutral-tertiary';
//   },
// },
