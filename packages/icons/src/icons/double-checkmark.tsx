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
      <Path fill={color} d="m7 11 5 7L23 7l-1-1-10 7-4-3zM6 13l.8-.56 1.983 2.777L6 18l-5-7 1-1z" />
      <Path fill={color} d="m17 7-4.264 4.265-.716.5-2.054-1.54L16 6z" />
    </Svg>
  );
};

export const DoubleCheckmark = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
