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
      <Path fill={color} d="m9 9 1 12h4l1-12zM16 21l1-12h4v12zM8 21 7 9H3v12zM21 3H3v4h18z" />
    </Svg>
  );
};

export const DataTable = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
