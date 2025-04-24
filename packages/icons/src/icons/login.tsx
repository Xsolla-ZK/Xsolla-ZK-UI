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
      <Path fill={color} d="m12 6 7-1v14l-7-1v3h9V3h-9z" />
      <Path fill={color} d="m15 12-4.5 5-1.5-.833L10.71 13H3v-2h7.71L9 7.833 10.5 7z" />
    </Svg>
  );
};

export const Login = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
