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
      <Path fill={color} d="M2 16 3 2h14v2H5v12z" />
      <Path fill={color} d="m20 5-1 17H6V5z" />
    </Svg>
  );
};

export const ContentCopy = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
