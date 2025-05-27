import { composeEventHandlers, Stack, styled } from '@tamagui/core';
import { createElement } from 'react';
import { getComponentsConfig, getMappedStyles, getTypographyPreset } from '../../utils';
import { Typography } from '../typography';
import {
  NAV_BAR_COMPONENT_NAME,
  NAV_BAR_END_SLOT_COMPONENT_NAME,
  NAV_BAR_START_SLOT_COMPONENT_NAME,
} from './nav-bar.constants';
import { NavBarContext, NavBarStateContext } from './nav-bar.context';
import type {
  NavBarContextType,
  NavBarPresets,
  NavBarSizes,
  NavBarStateContextType,
} from './nav-bar.types';
import type { GetProps, StyledContext } from '@tamagui/core';
import type { ReactNode } from 'react';

export const NavBarFrame = styled(Stack, {
  name: NAV_BAR_COMPONENT_NAME,
  context: NavBarContext,

  width: '100%',

  variants: {
    size: (val: NavBarSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.navBar.size[val as keyof typeof config.navBar.size];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.frame);
    },
  } as const,
  defaultVariants: {
    size: '$500',
  },
});

const slotStyles = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexShrink: 0,
} as const;

export const NavBarStartSlot = createNavBarSlot(
  NAV_BAR_START_SLOT_COMPONENT_NAME,
  'left',
  NavBarStateContext,
);

export const NavBarEndSlot = createNavBarSlot(
  NAV_BAR_END_SLOT_COMPONENT_NAME,
  'right',
  NavBarStateContext,
);

export const NavBarContent = styled(Stack, {
  name: NAV_BAR_COMPONENT_NAME,

  flexDirection: 'row',
  width: '100%',
  height: 'auto',
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    size: (val: NavBarSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.navBar.size[val as keyof typeof config.navBar.size];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.content);
    },
  } as const,
});

export const NavBarCenter = styled(Stack, {
  name: NAV_BAR_COMPONENT_NAME,
  context: NavBarContext,

  flex: 1,

  variants: {
    preset: (val: NavBarPresets) => {
      const config = getComponentsConfig();
      const componentProps = config.navBar.center[val];

      if (!componentProps) {
        return {};
      }

      return {
        ...getMappedStyles(componentProps.frame),
        alignItems: val === 'default' ? 'center' : 'flex-start',
      };
    },
  } as const,
});

export const NavBarTitle = styled(Typography, {
  name: NAV_BAR_COMPONENT_NAME,
  context: NavBarContext,

  userSelect: 'none',
  maxWidth: '100%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  variants: {
    preset: (val: NavBarPresets) => {
      if (val !== 'default' && val !== 'prominent') {
        return getTypographyPreset(val);
      }

      const config = getComponentsConfig();
      const componentProps = config.navBar.center[val];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.title);
    },
  } as const,
});

export const NavBarSubtitle = styled(Typography, {
  name: NAV_BAR_COMPONENT_NAME,
  context: NavBarContext,

  userSelect: 'none',
  maxWidth: '100%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  variants: {
    preset: (val: NavBarPresets) => {
      if (val !== 'default' && val !== 'prominent') {
        return getTypographyPreset(val);
      }

      const config = getComponentsConfig();
      const componentProps = config.navBar.center[val];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.subtitle);
    },
  } as const,
});

export function createNavBarSlot(
  name: string,
  side: 'left' | 'right',
  context: StyledContext<NavBarStateContextType>,
) {
  return function SlotComponent({
    children,
    ...props
  }: Omit<GetProps<typeof Stack>, 'children'> & {
    children: ReactNode | ((context: NavBarContextType) => ReactNode);
  }) {
    const { slotMaxWidth, onChangeSlotMaxWidth } = context.useStyledContext();
    const ctx = NavBarContext.useStyledContext();

    return createElement(
      styled(Stack, {
        name,
        ...slotStyles,
        justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
        variants: {
          size: (val: NavBarSizes) => {
            const config = getComponentsConfig();
            const componentProps = config.navBar.size[val as keyof typeof config.navBar.size];

            if (!componentProps) {
              return {};
            }

            return getMappedStyles(componentProps.addon);
          },
        } as const,
      }),
      {
        children: typeof children === 'function' ? children(ctx) : children,
        width: slotMaxWidth > 0 ? slotMaxWidth : undefined,
        ...props,
        onLayout: composeEventHandlers(props.onLayout, (e) => {
          const next = e.nativeEvent.layout.width;
          if (next !== slotMaxWidth) {
            onChangeSlotMaxWidth(next);
          }
        }),
      },
    );
  };
}
