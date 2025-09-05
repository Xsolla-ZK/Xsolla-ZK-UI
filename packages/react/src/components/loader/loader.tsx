import { useTheme, withStaticProperties } from '@tamagui/core';
import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { Circle } from 'react-native-svg';
import { useStyledMediaContext } from '../../hooks';
import { LoaderContext, LoaderFrame, LoaderSpin, LoaderText } from './loader.styled';
import type { LoaderProps } from './loader.types';
import type { ColorValue } from 'react-native';

const LoaderComponent = LoaderFrame.styleable<LoaderProps>(
  ({ children, ...propsIn }, ref) => {
    const { tone = 'brand', mainColor = '$color', spinColor = '$spinColor', ...props } = propsIn;

    return (
      <LoaderContext.Provider componentProps={props} {...{ mainColor, spinColor }}>
        <LoaderFrame theme={tone} {...props} ref={ref}>
          <LoaderSpinner />
          {children}
        </LoaderFrame>
      </LoaderContext.Provider>
    );
  },
  { disableTheme: true },
);

function LoaderSpinner() {
  const { mediaContext, ...ctx } = useStyledMediaContext(LoaderContext);
  const theme = useTheme();

  return (
    <SvgThemed fill="none" {...mediaContext} viewBox="0 0 28 28">
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
    </SvgThemed>
  );
}

export const Loader = withStaticProperties(LoaderComponent, {
  Text: LoaderText,
});
