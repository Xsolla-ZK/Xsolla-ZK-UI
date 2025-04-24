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
      <Path fill={color} d="M5.435 12.172 7 2h10l1.667 10.833L22 13v4H2v-5zM9 18l6 1v3H9z" />
    </Svg>
  );
};

export const Bell = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
