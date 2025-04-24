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
      <Path fill={color} d="m8 10 5-5.788h2L13 10h7v5l-2 5H8zM3 20V10h4v10z" />
    </Svg>
  );
};

export const ThumbUp = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
