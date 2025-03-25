import { withStaticProperties } from '@tamagui/core';
import Loader from '../loader/loader';
import { FlexButtonContext, FlexButtonFrame, FlexButtonText } from './flex-button.styled';
import type { FlexButtonProps } from './flex-button.types';
import type { TamaguiElement, ThemeName } from '@tamagui/core';
import type { ForwardedRef } from 'react';

export const FlexButtonComponent = FlexButtonFrame.styleable<FlexButtonProps>(
  ({ children, isLoading, tone = 'brand', ...props }, ref: ForwardedRef<TamaguiElement>) => (
    <FlexButtonFrame
      isLoading={isLoading}
      theme={tone as unknown as ThemeName}
      {...props}
      ref={ref}
    >
      {isLoading ? <Loader /> : children}
    </FlexButtonFrame>
  ),
  {
    disableTheme: true,
  },
);

const FlexButton = withStaticProperties(FlexButtonComponent, {
  Props: FlexButtonContext.Provider,
  Text: FlexButtonText,
});

export default FlexButton;
