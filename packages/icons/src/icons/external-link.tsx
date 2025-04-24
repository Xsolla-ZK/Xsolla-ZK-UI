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
      <Path fill={color} d="m19 19 1-6h1v8H3V3h8v1L5 5v14z" />
      <Path fill={color} d="m18.41 7.005-7.703 7.702-1.414-1.414 7.697-7.697L13 4V3h8v7.91h-1z" />
    </Svg>
  );
};

export const ExternalLink = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
