import { isWeb, Stack, styled, View } from '@tamagui/core';
import { getComponentsConfig, getMappedStyles } from '../../utils';
import { SheetBody, SheetFooter, SheetHeader, SheetOverlay } from '../sheet/sheet.styled';
import { Typography } from '../typography';
import {
  DIALOG_CLOSE_COMPONENT_NAME,
  DIALOG_CONTENT_COMPONENT_NAME,
  DIALOG_DESCRIPTION_COMPONENT_NAME,
  DIALOG_FOOTER_COMPONENT_NAME,
  DIALOG_HEADER_COMPONENT_NAME,
  DIALOG_OVERLAY_COMPONENT_NAME,
  DIALOG_BODY_COMPONENT_NAME,
  DIALOG_TITLE_COMPONENT_NAME,
  DIALOG_TRIGGER_COMPONENT_NAME,
} from './dialog.constants';
import type { DialogSizes } from './dialog.types';

export const DialogTriggerFrame = styled(View, {
  name: DIALOG_TRIGGER_COMPONENT_NAME,
});

export const DialogPortalFrame = styled(Stack, {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  pointerEvents: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  ...(isWeb && {
    maxHeight: '100vh',
    position: 'fixed' as never,
  }),

  variants: {} as const,

  defaultVariants: {},
});

export const DialogOverlayFrame = styled(SheetOverlay, {
  name: DIALOG_OVERLAY_COMPONENT_NAME,
});

export const DialogContentFrame = styled(Stack, {
  name: DIALOG_CONTENT_COMPONENT_NAME,
  tag: 'dialog',
  position: 'relative',
  zIndex: 100_000,
  outlineStyle: 'none',
  backgroundColor: '$background',

  variants: {
    size: (val: DialogSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.modal[val as keyof typeof config.modal];

      if (!componentProps) return {};

      return getMappedStyles(componentProps.frame);
    },
  } as const,
});

export const DialogHeaderFrame = styled(SheetHeader, {
  name: DIALOG_HEADER_COMPONENT_NAME,
});

export const DialogBodyFrame = styled(SheetBody, {
  name: DIALOG_BODY_COMPONENT_NAME,
});

export const DialogFooterFrame = styled(SheetFooter, {
  name: DIALOG_FOOTER_COMPONENT_NAME,
});

export const DialogTitleFrame = styled(Typography, {
  name: DIALOG_TITLE_COMPONENT_NAME,
});

export const DialogDescriptionFrame = styled(Typography, {
  name: DIALOG_DESCRIPTION_COMPONENT_NAME,
});

export const DialogCloseFrame = styled(View, {
  name: DIALOG_CLOSE_COMPONENT_NAME,
  tag: 'button',
});
