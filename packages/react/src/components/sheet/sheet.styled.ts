import { Stack, styled } from '@tamagui/core';
import { getComponentsConfig, getMappedStyles } from '@xsolla-zk/react/utils';
import {
  SHEET_COMPONENT_NAME,
  SHEET_HANDLE_COMPONENT_NAME,
  SHEET_HEADER_COMPONENT_NAME,
  SHEET_OVERLAY_COMPONENT_NAME,
} from './sheet.constants';
import type { SheetSizes } from './sheet.types';

export const SheetFrame = styled(Stack, {
  name: SHEET_COMPONENT_NAME,
  flex: 1,
  backgroundColor: '$background',
  maxHeight: '100%',
  overflow: 'hidden',

  variants: {
    size: (val: SheetSizes, extras) => {
      if (extras.props.componentName === 'SheetCover') {
        return {
          backgroundColor: 'transparent',
        };
      }
      const config = getComponentsConfig();
      const componentProps = config.modal[val];

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

export const SheetHandle = styled(Stack, {
  name: SHEET_HANDLE_COMPONENT_NAME,

  variants: {
    open: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
      },
      false: {
        opacity: 0,
        pointerEvents: 'none',
      },
    },
  } as const,

  defaultVariants: {},
});

export const SheetHeader = styled(Stack, {
  name: SHEET_HEADER_COMPONENT_NAME,

  variants: {
    size: (val: SheetSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.modal[val];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.header);
    },
  } as const,

  defaultVariants: {
    size: '$500',
  },
});

export const SheetOverlay = styled(Stack, {
  name: SHEET_OVERLAY_COMPONENT_NAME,
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '$background',
  zIndex: 100_000 - 1,
  pointerEvents: 'auto',

  variants: {
    open: {
      true: {
        pointerEvents: 'auto',
      },
      false: {
        pointerEvents: 'none',
      },
    },
  } as const,

  defaultVariants: {},
});
