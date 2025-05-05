import { createStyledContext, Stack, Text, styled } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import { createIconComponent } from '@xsolla-zk/react/utils/create-icon-component';
import { getMappedStyles } from '@xsolla-zk/react/utils/get-mapped-styles';
import { Board } from '../board/board';
import {
  NAV_BAR_COMPONENT_NAME,
  NAV_BAR_TITLE_COMPONENT_NAME,
  NAV_BAR_BACK_BUTTON_COMPONENT_NAME,
  NAV_BAR_ACTION_COMPONENT_NAME,
  NAV_BAR_ICON_COMPONENT_NAME,
} from './nav-bar.constants';
import type { NavBarContextType, NavBarSizes } from './nav-bar.types';

export const NavBarContext = createStyledContext<NavBarContextType>({
  size: '$500',
});

export const NavBarFrame = styled(Stack, {
  name: NAV_BAR_COMPONENT_NAME,
  context: NavBarContext,

  flexDirection: 'row',
  width: '100%',
  height: 'auto',
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    size: (val: NavBarSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.navBar.size[val];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.frame);
    },
  } as const,
});

export const NavBarStartSlot = styled(Stack, {
  name: NAV_BAR_COMPONENT_NAME,
  context: NavBarContext,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexShrink: 0,
  minWidth: 80,
});

export const NavBarEndSlot = styled(Stack, {
  name: NAV_BAR_COMPONENT_NAME,
  context: NavBarContext,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexShrink: 0,
  minWidth: 80,
});

export const NavBarTitleContainer = styled(Stack, {
  name: NAV_BAR_COMPONENT_NAME,
  context: NavBarContext,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

export const NavBarTitle = styled(Text, {
  name: NAV_BAR_TITLE_COMPONENT_NAME,
  context: NavBarContext,
  textAlign: 'center',
  fontWeight: 'bold',

  variants: {
    size: (val: NavBarSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.navBar.size[val];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.content);
    },
  } as const,
});

export const NavBarBackButton = styled(Board, {
  name: NAV_BAR_BACK_BUTTON_COMPONENT_NAME,
  context: NavBarContext,
  pressable: true,
  flexDirection: 'row',
  alignItems: 'center',

  variants: {
    size: (val: NavBarSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.navBar.size[val];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.content);
    },
  } as const,
});

export const NavBarAction = styled(Board, {
  name: NAV_BAR_ACTION_COMPONENT_NAME,
  context: NavBarContext,
  pressable: true,

  variants: {
    size: (val: NavBarSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.navBar.size[val];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.addon);
    },
  } as const,
});

export const NavBarIcon = createIconComponent(NAV_BAR_ICON_COMPONENT_NAME, NavBarContext, 'navBar');
