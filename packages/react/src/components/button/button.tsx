import { getTokenValue, withStaticProperties } from '@tamagui/core';
import { forwardRef } from 'react';
import { useIconsPosition } from '../../hooks';
import { getComponentsConfig } from '../../utils';
import { Loader } from '../loader';
import { ButtonContext, ButtonFrame, ButtonIcon, ButtonText } from './button.styled';
import type { ButtonContextType, ButtonProps } from './button.types';
import type { LoaderProps } from '../loader/loader.types';
import type { ColorTokens, TamaguiElement, ThemeName, Token } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const ButtonComponent = ButtonFrame.styleable<ButtonProps>(
  forwardRef(
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
          {isLoading ? <ButtonLoader /> : children}
        </ButtonFrame>
      );
    },
  ),
  {
    disableTheme: true,
  },
);

const getLoaderColors = (ctx: ButtonContextType): LoaderProps => {
  const { tone, variant } = ctx;
  if (variant === 'primary') {
    return {
      mainColor: `$border.${tone}-primary` as ColorTokens,
      spinColor: `$content.on-${tone}` as ColorTokens,
    };
  }

  return {
    mainColor: `$border.${tone}-secondary` as ColorTokens,
    spinColor: `$content.${tone}-primary` as ColorTokens,
  };
};

function ButtonLoader() {
  const ctx = ButtonContext.useStyledContext();

  const config = getComponentsConfig();
  const size = config.button[ctx.size as keyof typeof config.button];

  return (
    <Loader
      {...getLoaderColors(ctx)}
      size={size ? (getTokenValue(size.icon.size as Token, 'size') as number) : undefined}
    />
  );
}

export const Button = withStaticProperties(ButtonComponent, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
});
