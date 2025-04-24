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
      <Path fill={color} d="m12 18-7 1V5l7 1V3H3v18h9z" />
      <Path fill={color} d="m21 12-4.5-5-1.5.833L16.71 11H9v2h7.71L15 16.167l1.5.833z" />
    </Svg>
  );
};

export const Logout = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
