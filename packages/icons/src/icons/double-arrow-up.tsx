import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';
import type { ComponentProps, FC } from 'react';

type Props = ComponentProps<typeof Svg> & {
  size: number;
};

const Icon: FC = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props as Props;
  return (
    <Svg fill="none" viewBox="0 0 24 24" width={size} height={size} {...otherProps}>
      <Path fill={color} d="m6 11 6-6 6 6-1 1-5-3-5 3z" />
      <Path fill={color} d="m6 17 6-6 6 6-1 1-5-3-5 3z" />
    </Svg>
  );
};

export const DoubleArrowUp = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
