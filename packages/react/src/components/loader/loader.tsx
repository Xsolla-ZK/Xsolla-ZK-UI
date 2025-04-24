import { useTheme, withStaticProperties } from '@tamagui/core';
import { useContext } from 'react';
import Svg, { Circle } from 'react-native-svg';
import { LoaderContext, LoaderFrame, LoaderSpin, LoaderText } from './loader.styled';
import type { LoaderProps } from './loader.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';
import type { ColorValue } from 'react-native';

const LoaderComponent = LoaderFrame.styleable<LoaderProps>(
  (
    {
      children,
      size = 24,
      tone = 'brand',
      mainColor = '$color',
      spinColor = '$spinColor',
      ...props
    },
    ref: ForwardedRef<TamaguiElement>,
  ) => (
    <LoaderContext.Provider {...{ size, mainColor, spinColor }}>
      <LoaderFrame size={size} theme={tone} {...props} ref={ref}>
        <LoaderSpinner />
        {children}
      </LoaderFrame>
    </LoaderContext.Provider>
  ),
  { disableTheme: true },
);

function LoaderSpinner() {
  const ctx = useContext(LoaderContext);
  const theme = useTheme();

  return (
    <Svg fill="none" width={ctx.size} height={ctx.size} viewBox="0 0 28 28">
      <Circle
        cx={14}
        cy={14}
        r={12}
        strokeWidth={4}
        stroke={(theme[ctx.mainColor as keyof typeof theme]?.get() ?? ctx.mainColor) as ColorValue}
      />
      <LoaderSpin
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDashoffset={150}
        strokeDasharray="0 150"
        strokeWidth={4}
        cx={14}
        cy={14}
        r={12}
        stroke={(theme[ctx.spinColor as keyof typeof theme]?.get() ?? ctx.spinColor) as ColorValue}
      >
        <animate
          attributeName="stroke-dasharray"
          values="0 150;18 150;18 150;0 150"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          values="150;150;112;75"
          dur="1s"
          repeatCount="indefinite"
        />
      </LoaderSpin>
    </Svg>
  );
}

export const Loader = withStaticProperties(LoaderComponent, {
  Props: LoaderContext.Provider,
  Text: LoaderText,
});
