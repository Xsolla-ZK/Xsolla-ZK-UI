import { Stack } from '@tamagui/core';
import { SNACK_BAR_COMPONENT_NAME } from '@xsolla-zk/constants';
import {
  createStyledMediaContext,
  getComponentsConfig,
  getMappedStyles,
  smartContextStyled,
} from '../../utils';
import type { SnackBarContextType, SnackBarSizes } from './snack-bar.types';

export const SnackBarContext = createStyledMediaContext(
  {
    size: '$500',
  } as SnackBarContextType,
  ['size'],
);

export const SnackBarFrame = smartContextStyled(Stack, {
  name: SNACK_BAR_COMPONENT_NAME,
  // context: SnackBarContext,

  position: 'relative',
  backgroundColor: '$background',
  boxShadow: '$shadow.100',

  variants: {
    size: (val: SnackBarSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.snackBar[val as keyof typeof config.snackBar];
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

export const SnackBarContentFrame = smartContextStyled(Stack, {
  // context: SnackBarContext,

  flexDirection: 'row',
  alignItems: 'flex-start',

  variants: {
    size: (val: SnackBarSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.snackBar[val as keyof typeof config.snackBar];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.content.frame);
    },
  } as const,

  defaultVariants: {},
});

export const SnackBarContentDescriptionFrame = smartContextStyled(Stack, {
  // context: SnackBarContext,
  flex: 1,
  variants: {
    size: (val: SnackBarSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.snackBar[val as keyof typeof config.snackBar];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.content.description.frame);
    },
  } as const,

  defaultVariants: {},
});

export const SnackBarContentDescriptionListFrame = smartContextStyled(Stack, {
  // context: SnackBarContext,
  variants: {
    size: (val: SnackBarSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.snackBar[val as keyof typeof config.snackBar];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.content.description.list);
    },
  } as const,

  defaultVariants: {},
});

export const SnackBarContentDescriptionActionsFrame = smartContextStyled(Stack, {
  // context: SnackBarContext,

  flexDirection: 'row',
  alignItems: 'center',

  variants: {
    size: (val: SnackBarSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.snackBar[val as keyof typeof config.snackBar];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.content.description.actions);
    },
  } as const,

  defaultVariants: {},
});
