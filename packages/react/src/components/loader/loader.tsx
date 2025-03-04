import { useTheme, withStaticProperties } from '@tamagui/core';
import { useContext, type ForwardedRef } from 'react';
import Svg, { Circle } from 'react-native-svg';
import { LoaderContext, LoaderRoot, LoaderText } from './loader.styled';
import type { LoaderProps } from './loader.types';
import type { TamaguiElement } from '@tamagui/core';

const LoaderComponent = LoaderRoot.styleable<LoaderProps>(function LoaderComponent(
  { children, ...props },
  ref: ForwardedRef<TamaguiElement>,
) {
  return (
    <LoaderRoot ref={ref} {...props}>
      <Spinner />
      {children}
    </LoaderRoot>
  );
});

function Spinner() {
  const ctx = useContext(LoaderContext);
  const theme = useTheme();

  return (
    <Svg fill="none" width={ctx.size} height={ctx.size} viewBox="0 0 28 28">
      <Circle cx={14} cy={14} r={12} strokeWidth={4} stroke={theme[ctx.color]?.get()} />
      <Circle
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDashoffset={150}
        strokeDasharray="0 150"
        strokeWidth={4}
        cx={14}
        cy={14}
        r={12}
        stroke={theme[ctx.spinColor]?.get()}
      />
    </Svg>
  );
}

const Loader = withStaticProperties(LoaderComponent, {
  Props: LoaderContext.Provider,
  Text: LoaderText,
});

export default Loader;
