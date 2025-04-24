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
      <Path fill={color} d="m7 12 1 7h2l1-7-1-7H8zM13 12l1 7h2l1-7-1-7h-2z" />
    </Svg>
  );
};

export const Pause = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
