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
      <Path fill={color} d="M22 12V2H12v2l7 1 1 7zM2 12v10h10v-2l-7-1-1-7z" />
    </Svg>
  );
};

export const SwapDiagonal = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
