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
      <Path fill={color} d="M12 4 4 5v5l8 1 8-1V5zM12 13l-8 1v5l8 1 8-1v-5z" />
    </Svg>
  );
};

export const ListVertical = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
