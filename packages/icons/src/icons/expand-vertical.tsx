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
      <Path fill={color} d="m18 8-6-6-6 6 1 2 5-3 5 3zM6 16l6 6 6-6-1-2-5 3-5-3z" />
    </Svg>
  );
};

export const ExpandVertical = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
