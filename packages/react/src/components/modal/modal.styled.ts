import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { ScrollView } from '@tamagui/scroll-view';
import {
  MODAL_COMPONENT_NAME,
  MODAL_HEADER_COMPONENT_NAME,
  MODAL_CONTENT_COMPONENT_NAME,
  MODAL_FOOTER_COMPONENT_NAME,
} from '@xsolla-zk/constants';

type ModalContextType = {
  variant: 'sheet' | 'dialog';
};

export const ModalContext = createStyledContext<ModalContextType>({
  variant: 'dialog',
});

export const ModalFrame = styled(Stack, {
  name: MODAL_COMPONENT_NAME,
  context: ModalContext,
  variants: {
    variant: {
      sheet: {},
      dialog: {},
    },
  },
});

export const ModalHeader = styled(Stack, {
  name: MODAL_HEADER_COMPONENT_NAME,
  context: ModalContext,
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',
  zIndex: 1,
});

export const ModalHeaderContent = styled(Stack, {
  name: MODAL_HEADER_COMPONENT_NAME,
  context: ModalContext,
});

export const ModalHeaderTitle = styled(Text, {
  name: MODAL_HEADER_COMPONENT_NAME,
  context: ModalContext,
  ellipsizeMode: 'tail',
  numberOfLines: 1,
  color: '$color',
  // compact.400.accent
});

export const ModalContent = styled(ScrollView, {
  name: MODAL_CONTENT_COMPONENT_NAME,
  context: ModalContext,
  position: 'relative',
  flex: 1,
  width: '100%',
  padding: '$space.100',
});

export const ModalContentInner = styled(Stack, {
  name: MODAL_CONTENT_COMPONENT_NAME,
  context: ModalContext,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
});

export const ModalFooter = styled(Stack, {
  name: MODAL_FOOTER_COMPONENT_NAME,
  context: ModalContext,

  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',

  variants: {
    blured: {
      true: {
        backgroundColor: '$layer.floor-overlay',
        backdropFilter: 'blur(200px)',
      },
    },
  },
});
