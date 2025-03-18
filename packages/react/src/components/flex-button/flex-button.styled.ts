import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import type { FlexButtonContextType } from './flex-button.types';

export const FLEX_BUTTON_COMPONENT_NAME = 'FlexButton';

export const FlexButtonContext = createStyledContext<FlexButtonContextType>({
  size: '$500',
});

export const FlexButtonFrame = styled(Stack, {
  name: FLEX_BUTTON_COMPONENT_NAME,
  context: FlexButtonContext,
  backgroundColor: '$background',
});

export const FlexButtonText = styled(Text, {
  name: FLEX_BUTTON_COMPONENT_NAME,
  context: FlexButtonContext,
});
