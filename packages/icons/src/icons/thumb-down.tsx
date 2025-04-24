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
      <Path fill={color} d="m20 9-1-4.788H8v10L13 20h2l-2-5.788h7zM3 4.212v10h4v-10z" />
    </Svg>
  );
};

export const ThumbDown = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
