import { Stack, styled } from '@tamagui/core';

import { createSheet } from '@tamagui/sheet';

export const SHEET_HANDLE_COMPONENT_NAME = 'SheetHandle';
export const SHEET_OVERLAY_COMPONENT_NAME = 'SheetOverlay';
export const SHEET_COMPONENT_NAME = 'Sheet';

/* -------------------------------------------------------------------------------------------------
 * SheetHandle
 * -----------------------------------------------------------------------------------------------*/

export const Handle = styled(Stack, {
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

/* -------------------------------------------------------------------------------------------------
 * SheetOverlay
 * -----------------------------------------------------------------------------------------------*/

export const Overlay = styled(Stack, {
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

/* -------------------------------------------------------------------------------------------------
 * Sheet
 * -----------------------------------------------------------------------------------------------*/

export const Frame = styled(Stack, {
  name: SHEET_COMPONENT_NAME,
  flex: 1,
  backgroundColor: '$background',
  width: '100%',
  maxHeight: '100%',
  overflow: 'hidden',

  defaultVariants: {},
});

export const Sheet = createSheet({
  Frame,
  Handle,
  Overlay,
});
