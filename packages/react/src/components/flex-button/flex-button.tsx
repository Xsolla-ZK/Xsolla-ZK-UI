import { withStaticProperties } from '@tamagui/core';
import { forwardRef } from 'react';
import { processMediaValues } from '../../utils';
import { Loader } from '../loader';
import {
  FlexButtonContext,
  FlexButtonFrame,
  FlexButtonIcon,
  FlexButtonOverlay,
  FlexButtonText,
} from './flex-button.styled';
import type { FlexButtonProps } from './flex-button.types';
import type { LoaderProps } from '../loader/loader.types';
import type { ColorTokens, ThemeName } from '@tamagui/core';

const FlexButtonComponent = FlexButtonFrame.styleable<FlexButtonProps>(
  ({ children, tone = 'brand', isLoading, disabled, ...propsIn }, ref) => {
    const providerValue = {
      tone,
      disabled,
    };

    return (
      <FlexButtonContext.Provider componentProps={propsIn} {...providerValue}>
        <FlexButtonFrame
          group={!disabled}
          isLoading={isLoading}
          tone={tone}
          theme={tone as unknown as ThemeName}
          {...propsIn}
          ref={ref}
        >
          {!disabled && <FlexButtonOverlay />}
          {isLoading ? <FlexButtonLoader /> : children}
        </FlexButtonFrame>
      </FlexButtonContext.Provider>
    );
  },
  {
    disableTheme: true,
  },
);

function FlexButtonLoader() {
  const ctx = FlexButtonContext.useStyledContext();

  const { size, tone } = ctx;

  const loaderProps = processMediaValues(
    { size, tone },
    {
      size: (val, { config }) => {
        const componentProps = config.flexButton[val as keyof typeof config.flexButton];

        if (!componentProps) {
          return {};
        }

        return {
          size: componentProps.icon.size,
        };
      },
      tone: (val) => ({
        mainColor: `$border.${val}-secondary` as ColorTokens,
        spinColor: `$content.${val}-primary` as ColorTokens,
      }),
    },
  ) as LoaderProps;

  return <Loader {...loaderProps} />;
}

export const FlexButton = withStaticProperties(FlexButtonComponent, {
  Text: FlexButtonText,
  Icon: FlexButtonIcon,
});
