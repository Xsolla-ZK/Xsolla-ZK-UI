import { createContext, createContextScope } from '@tamagui/create-context';
import {
  DIALOG_COMPONENT_NAME,
  DIALOG_CONTENT_COMPONENT_NAME,
  DIALOG_PORTAL_COMPONENT_NAME,
  DIALOG_TITLE_COMPONENT_NAME,
  DIALOG_WARNING_COMPONENT_NAME,
} from '@xsolla-zk/constants';
import type { DialogContextValue, PortalContextValue } from './dialog.types';

const [createDialogContext, _createDialogScope] = createContextScope(DIALOG_COMPONENT_NAME);

export const [DialogProvider, useDialogContext] =
  createDialogContext<DialogContextValue>(DIALOG_COMPONENT_NAME);

export const [PortalProvider, usePortalContext] = createDialogContext<PortalContextValue>(
  DIALOG_PORTAL_COMPONENT_NAME,
  {
    forceMount: undefined,
  },
);

export const [DialogWarningProvider, useWarningContext] = createContext(
  DIALOG_WARNING_COMPONENT_NAME,
  {
    contentName: DIALOG_CONTENT_COMPONENT_NAME,
    titleName: DIALOG_TITLE_COMPONENT_NAME,
    docsSlug: 'dialog',
  },
);
