import { createStyledContext, Stack, styled } from '@tamagui/core';
import { SNACK_BAR_COMPONENT_NAME } from '@xsolla-zk/constants';
import { getComponentsConfig } from '../../utils';
import { getMappedStyles } from '../../utils';
import type { SnackBarContextType, SnackBarSizes } from './snack-bar.types';

export const SnackBarContext = createStyledContext<SnackBarContextType>({
  size: '$500',
});

export const SnackBarFrame = styled(Stack, {
  name: SNACK_BAR_COMPONENT_NAME,
  context: SnackBarContext,

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

export const SnackBarContentFrame = styled(Stack, {
  context: SnackBarContext,

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

export const SnackBarContentDescriptionFrame = styled(Stack, {
  context: SnackBarContext,
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

export const SnackBarContentDescriptionListFrame = styled(Stack, {
  context: SnackBarContext,
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

export const SnackBarContentDescriptionActionsFrame = styled(Stack, {
  context: SnackBarContext,

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
