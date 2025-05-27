import { getTokenValue, withStaticProperties } from '@tamagui/core';
import { forwardRef } from 'react';
import { getComponentsConfig } from '../../utils';
import { Loader } from '../loader/loader';
import {
  FlexButtonContext,
  FlexButtonFrame,
  FlexButtonIcon,
  FlexButtonOverlay,
  FlexButtonText,
} from './flex-button.styled';
import type { FlexButtonContextType, FlexButtonProps } from './flex-button.types';
import type { LoaderProps } from '../loader/loader.types';
import type { ColorTokens, TamaguiElement, ThemeName, Token } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const FlexButtonComponent = FlexButtonFrame.styleable<FlexButtonProps>(
  forwardRef(
    ({ children, isLoading, tone = 'brand', ...props }, ref: ForwardedRef<TamaguiElement>) => (
      <FlexButtonFrame
        group={!props.disabled}
        isLoading={isLoading}
        tone={tone}
        theme={tone as unknown as ThemeName}
        {...props}
        ref={ref}
      >
        {!props.disabled && <FlexButtonOverlay />}
        {isLoading ? <FlexButtonLoader /> : children}
      </FlexButtonFrame>
    ),
  ),
  {
    disableTheme: true,
  },
);

const getLoaderColors = (ctx: FlexButtonContextType): LoaderProps => {
  const { tone } = ctx;

  return {
    mainColor: `$border.${tone}-secondary` as ColorTokens,
    spinColor: `$content.${tone}-primary` as ColorTokens,
  };
};

function FlexButtonLoader() {
  const ctx = FlexButtonContext.useStyledContext();

  const config = getComponentsConfig();
  const size = config.flexButton[ctx.size as keyof typeof config.flexButton];

  return (
    <Loader
      {...getLoaderColors(ctx)}
      size={size ? (getTokenValue(size.icon.size as Token, 'size') as number) : undefined}
    />
  );
}

export const FlexButton = withStaticProperties(FlexButtonComponent, {
  Props: FlexButtonContext.Provider,
  Text: FlexButtonText,
  Icon: FlexButtonIcon,
});
