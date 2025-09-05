import { composeEventHandlers, Stack } from '@tamagui/core';
import {
  NAV_BAR_COMPONENT_NAME,
  NAV_BAR_END_SLOT_COMPONENT_NAME,
  NAV_BAR_START_SLOT_COMPONENT_NAME,
} from '@xsolla-zk/constants';
import { createElement, useRef } from 'react';
import {
  getComponentsConfig,
  getMappedStyles,
  getTypographyPreset,
  smartContextStyled,
} from '../../utils';
import { Typography } from '../typography';
import { NavBarContext, NavBarStateContext } from './nav-bar.context';
import type { NavBarPresets, NavBarSizes, NavBarStateContextType } from './nav-bar.types';
import type { GetProps, StyledContext } from '@tamagui/core';
import type { ReactNode } from 'react';

export const NavBarFrame = smartContextStyled(Stack, {
  name: NAV_BAR_COMPONENT_NAME,
  width: '100%',
  justifyContent: 'center',

  variants: {
    preset: (_val: NavBarPresets) => ({}),
    size: (val: NavBarSizes) => {
      const componentsConfig = getComponentsConfig();
      const componentProps =
        componentsConfig.navBar.size[val as keyof typeof componentsConfig.navBar.size];

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

export const NavBarContent = smartContextStyled(Stack, {
  name: NAV_BAR_COMPONENT_NAME,
  // context: NavBarContext,

  flexDirection: 'row',
  width: '100%',
  height: 'auto',
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    size: (val: NavBarSizes) => {
      const componentsConfig = getComponentsConfig();
      const componentProps =
        componentsConfig.navBar.size[val as keyof typeof componentsConfig.navBar.size];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.content);
    },
  } as const,
});

export const NavBarCenter = smartContextStyled(Stack, {
  name: NAV_BAR_COMPONENT_NAME,

  flex: 1,

  variants: {
    preset: (val: NavBarPresets) => {
      const componentsConfig = getComponentsConfig();
      const componentProps = componentsConfig.navBar.center[val];

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

export const NavBarTitle = smartContextStyled(Typography, {
  name: NAV_BAR_COMPONENT_NAME,
  context: NavBarContext,

  userSelect: 'none',
  maxWidth: '100%',
  ellipsizeMode: 'tail',
  numberOfLines: 1,

  variants: {
    preset: (val: NavBarPresets) => {
      const componentsConfig = getComponentsConfig();
      if (val !== 'default' && val !== 'prominent') {
        return getTypographyPreset(val);
      }

      const componentProps = componentsConfig.navBar.center[val];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.title);
    },
  } as const,
});

export const NavBarSubtitle = smartContextStyled(Typography, {
  name: NAV_BAR_COMPONENT_NAME,
  context: NavBarContext,

  userSelect: 'none',
  maxWidth: '100%',
  ellipsizeMode: 'tail',
  numberOfLines: 1,

  variants: {
    preset: (val: NavBarPresets) => {
      const componentsConfig = getComponentsConfig();
      if (val !== 'default' && val !== 'prominent') {
        return getTypographyPreset(val);
      }

      const componentProps = componentsConfig.navBar.center[val];

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
    children?: ReactNode;
  }) {
    const { slotMaxWidth, onChangeSlotMaxWidth } = context.useStyledContext();
    const updateTimeoutRef = useRef<number | null>(null);

    return createElement(
      smartContextStyled(Stack, {
        name,
        context: NavBarContext,
        ...slotStyles,
        justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
        variants: {
          size: (val: NavBarSizes) => {
            const componentsConfig = getComponentsConfig();
            const componentProps =
              componentsConfig.navBar.size[val as keyof typeof componentsConfig.navBar.size];

            if (!componentProps) {
              return {};
            }

            return getMappedStyles(componentProps.addon);
          },
        } as const,
      }),
      {
        children,
        width: slotMaxWidth > 0 ? slotMaxWidth : undefined,
        ...props,
        onLayout: composeEventHandlers(props.onLayout, (e) => {
          const next = e.nativeEvent.layout.width;
          if (next !== slotMaxWidth) {
            // Cancel previous scheduled update if it exists
            if (updateTimeoutRef.current !== null) {
              cancelAnimationFrame(updateTimeoutRef.current);
            }

            // Use requestAnimationFrame for layout-related updates to prevent layout thrashing
            // This ensures the state update is synchronized with the browser's repaint cycle,
            // avoiding unnecessary layout recalculations and visual flickering
            updateTimeoutRef.current = requestAnimationFrame(() => {
              updateTimeoutRef.current = null;
              onChangeSlotMaxWidth(next);
            });
          }
        }),
      },
    );
  };
}
