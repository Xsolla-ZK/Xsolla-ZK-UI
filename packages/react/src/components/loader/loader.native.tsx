import { useTheme, withStaticProperties } from '@tamagui/core';
import { forwardRef, useContext, useEffect } from 'react';
import { Easing, useAnimatedProps, withRepeat, withTiming } from 'react-native-reanimated';
import { useSharedValue } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';
import { LoaderContext, LoaderFrame, LoaderText } from './loader.styled';
import type { LoaderProps } from './loader.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';
import type { ColorValue } from 'react-native';

const LoaderComponent = LoaderFrame.styleable<LoaderProps>(
  forwardRef(
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
  ),
  { disableTheme: true },
);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

function AnimatedStrokeCircle() {
  const ctx = LoaderContext.useStyledContext();
  const progress = useSharedValue(0);
  const theme = useTheme();

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1, // infinite
      false,
    );
  }, []);

  const animatedProps = useAnimatedProps(() => {
    if (progress.value < 0.5) {
      return {
        strokeDasharray: [18, 150],
        strokeDashoffset: 150,
      };
    } else if (progress.value < 0.75) {
      return {
        strokeDasharray: [18, 150],
        strokeDashoffset: 112,
      };
    } else {
      return {
        strokeDasharray: [0, 150],
        strokeDashoffset: 75,
      };
    }
  });

  return (
    <AnimatedCircle
      cx={14}
      cy={14}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDashoffset={150}
      strokeDasharray="0 150"
      r={12}
      fill="none"
      strokeWidth={4}
      animatedProps={animatedProps}
      transform="rotate(-90, 50, 50)"
      stroke={(theme[ctx.spinColor as keyof typeof theme]?.get() ?? ctx.spinColor) as ColorValue}
    />
  );
}

function LoaderSpinner() {
  const ctx = LoaderContext.useStyledContext();
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
      <AnimatedStrokeCircle />
    </Svg>
  );
}

export const Loader = withStaticProperties(LoaderComponent, {
  Props: LoaderContext.Provider,
  Text: LoaderText,
});
