import { getTokenValue, withStaticProperties } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { useContext, type ForwardedRef } from 'react';
import Loader from '../loader/loader';
import {
  FlexButtonContext,
  FlexButtonFrame,
  FlexButtonIcon,
  FlexButtonOverlay,
  FlexButtonText,
} from './flex-button.styled';
import type { FlexButtonContextType, FlexButtonProps } from './flex-button.types';
import type { LoaderProps } from '../loader/loader.types';
import type { TamaguiElement, ThemeName, Token } from '@tamagui/core';

export const FlexButtonComponent = FlexButtonFrame.styleable<FlexButtonProps>(
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
  {
    disableTheme: true,
  },
);

const getLoaderColors = (ctx: FlexButtonContextType): LoaderProps => {
  const { tone } = ctx;

  return {
    mainColor: `$border.${tone}-secondary`,
    spinColor: `$content.${tone}-primary`,
  };
};

function FlexButtonLoader() {
  const ctx = useContext(FlexButtonContext);

  const size = getComponentsConfig().flexButton[ctx.size];

  return (
    <Loader
      {...getLoaderColors(ctx)}
      size={size ? (getTokenValue(size.icon.size as Token, 'size') as number) : undefined}
    />
  );
}

const FlexButton = withStaticProperties(FlexButtonComponent, {
  Props: FlexButtonContext.Provider,
  Text: FlexButtonText,
  Icon: FlexButtonIcon,
});

export default FlexButton;
