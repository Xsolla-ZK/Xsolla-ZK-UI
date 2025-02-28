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
      <Path fill={color} d="m1.4 12 6 6 1.4-1.4L4.225 12 8.8 7.4 7.4 6z" />
      <Path fill={color} d="m8 12 6 6 1.4-1.4-4.575-4.6L15.4 7.4 14 6z" />
      <Path fill={color} d="m14.6 12 6 6 1.4-1.4-4.575-4.6L22 7.4 20.6 6z" />
    </Svg>
  );
};

export const TripleArrowLeft = memo<IconProps>(themed(Icon));
