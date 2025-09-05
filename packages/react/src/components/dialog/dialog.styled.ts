import { Stack, View } from '@tamagui/core';
import {
  DIALOG_BODY_COMPONENT_NAME,
  DIALOG_CLOSE_COMPONENT_NAME,
  DIALOG_CONTENT_COMPONENT_NAME,
  DIALOG_DESCRIPTION_COMPONENT_NAME,
  DIALOG_FOOTER_COMPONENT_NAME,
  DIALOG_HEADER_COMPONENT_NAME,
  DIALOG_OVERLAY_COMPONENT_NAME,
  DIALOG_TITLE_COMPONENT_NAME,
  DIALOG_TRIGGER_COMPONENT_NAME,
} from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles, smartContextStyled } from '../../utils';
import { SheetBody, SheetFooter, SheetHeader, SheetOverlay } from '../sheet/sheet.styled';
import { Typography } from '../typography';
import type { DialogSizes } from './dialog.types';

export const DialogTriggerFrame = smartContextStyled(View, {
  name: DIALOG_TRIGGER_COMPONENT_NAME,
});

export const DialogPortalFrame = smartContextStyled(Stack, {
  tag: 'dialog',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  pointerEvents: 'none',
  alignItems: 'center',
  justifyContent: 'center',

  '$platform-web': {
    // undo dialog styles
    borderWidth: 0,
    backgroundColor: 'transparent',
    // color: 'inherit',
    maxInlineSize: 'none',
    margin: 0,
    width: 'auto',
    height: 'auto',
    // ensure always in frame and right height
    maxHeight: '100vh',
    position: 'fixed' as never,
  },
});

export const DialogOverlayFrame = smartContextStyled(SheetOverlay, {
  name: DIALOG_OVERLAY_COMPONENT_NAME,
});

export const DialogContentFrame = smartContextStyled(Stack, {
  name: DIALOG_CONTENT_COMPONENT_NAME,
  tag: 'dialog',
  position: 'relative',
  zIndex: 100_000,
  outlineStyle: 'none',
  backgroundColor: '$background',
  overflow: 'hidden',

  variants: {
    size: (val: DialogSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.modal[val as keyof typeof config.modal];

      if (!componentProps) return {};

      return getMappedStyles(componentProps.frame);
    },
  } as const,
});

export const DialogHeaderFrame = smartContextStyled(SheetHeader, {
  name: DIALOG_HEADER_COMPONENT_NAME,
});

export const DialogBodyFrame = smartContextStyled(SheetBody, {
  name: DIALOG_BODY_COMPONENT_NAME,
});

export const DialogFooterFrame = smartContextStyled(SheetFooter, {
  name: DIALOG_FOOTER_COMPONENT_NAME,
});

export const DialogTitleFrame = smartContextStyled(Typography, {
  name: DIALOG_TITLE_COMPONENT_NAME,
});

export const DialogDescriptionFrame = smartContextStyled(Typography, {
  name: DIALOG_DESCRIPTION_COMPONENT_NAME,
});

export const DialogCloseFrame = smartContextStyled(View, {
  name: DIALOG_CLOSE_COMPONENT_NAME,
  tag: 'button',
});
