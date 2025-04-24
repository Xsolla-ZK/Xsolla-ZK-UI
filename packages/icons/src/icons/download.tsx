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
      <Path fill={color} d="M13 4v7.71L16.167 10 17 11.5 12 16l-5-4.5.833-1.5L11 11.71V4z" />
      <Path fill={color} d="m18 11 1 7H5l1-7H3v9h18v-9z" />
    </Svg>
  );
};

export const Download = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
