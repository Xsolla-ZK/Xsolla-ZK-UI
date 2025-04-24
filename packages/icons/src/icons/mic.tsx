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
      <Path
        fill={color}
        d="M7 11a5 5 0 1 0 10 0h2a7 7 0 0 1-6 6.928V21h-2v-3.072A7 7 0 0 1 5 11z"
      />
      <Path fill={color} d="M9 2h6v4h-1v1h1v2h-1v1h1v3H9v-3h3V9H9V7h3V6H9z" />
    </Svg>
  );
};

export const Mic = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
