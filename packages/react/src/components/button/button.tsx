import { withStaticProperties } from '@tamagui/core';
import Loader from '../loader/loader';
import { ButtonContext, ButtonIcon, ButtonOverlay, ButtonFrame, ButtonText } from './button.styled';
import type { ButtonProps } from './button.types';
import type { TamaguiElement, ThemeName } from '@tamagui/core';
import type { ForwardedRef } from 'react';

export const ButtonComponent = ButtonFrame.styleable<ButtonProps>(
  ({ children, isLoading, tone = 'brand', ...props }, ref: ForwardedRef<TamaguiElement>) => (
    <ButtonFrame
      group
      isLoading={isLoading}
      theme={tone as unknown as ThemeName}
      tone={tone}
      {...props}
      ref={ref}
    >
      <ButtonOverlay />
      {isLoading ? <Loader /> : children}
    </ButtonFrame>
  ),
  {
    disableTheme: true,
  },
);

const Button = withStaticProperties(ButtonComponent, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
});

export default Button;
