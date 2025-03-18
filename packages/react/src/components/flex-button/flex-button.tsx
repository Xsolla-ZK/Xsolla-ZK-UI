import { withStaticProperties } from '@tamagui/core';
import { FlexButtonContext, FlexButtonFrame, FlexButtonText } from './flex-button.styled';

const FlexButton = withStaticProperties(FlexButtonFrame, {
  Props: FlexButtonContext.Provider,
  Text: FlexButtonText,
});

export default FlexButton;
