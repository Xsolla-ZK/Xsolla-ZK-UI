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
      <Path fill={color} d="M11 2H5v6h2v1H5v6h2v1H5v6h6v-6H9v-1h2v-2h2v2h6V9h-6v2h-2V9H9V8h2z" />
    </Svg>
  );
};

export const Graph = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
