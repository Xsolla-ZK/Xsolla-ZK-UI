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
      <Path fill={color} d="M9 5v6H3V5zM12 13h6v6h-6zM10 7h11v2H10zM11 15H3v2h8zM19 15h2v2h-2z" />
    </Svg>
  );
};

export const Tune = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
