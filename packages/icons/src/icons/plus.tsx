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
      <Path fill={color} d="m10 10 1-6h2l1 6 6 1v2l-6 1-1 6h-2l-1-6-6-1v-2z" />
    </Svg>
  );
};

export const Plus = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
