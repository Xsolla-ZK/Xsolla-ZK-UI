import { withStaticProperties } from '@tamagui/core';
import useIconsPosition from '@xsolla-zk-ui/react/hooks/use-icons-position';
import { type ForwardedRef } from 'react';
import Loader from '../loader/loader';
import { ButtonContext, ButtonFrame, ButtonIcon, ButtonText } from './button.styled';
import type { ButtonProps } from './button.types';
import type { TamaguiElement, ThemeName } from '@tamagui/core';

export const ButtonComponent = ButtonFrame.styleable<ButtonProps>(
  ({ children, isLoading, tone = 'brand', ...props }, ref: ForwardedRef<TamaguiElement>) => {
    const iconsPosition = useIconsPosition(children, ButtonIcon);

    return (
      <ButtonFrame
        isLoading={isLoading}
        theme={tone as unknown as ThemeName}
        tone={tone}
        {...iconsPosition}
        {...props}
        ref={ref}
      >
        {isLoading ? <Loader /> : children}
      </ButtonFrame>
    );
  },
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
