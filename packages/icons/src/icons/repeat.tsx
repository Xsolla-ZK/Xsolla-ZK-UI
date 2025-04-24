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
        d="M11.75 1 8 5l3.75 4L13 8.333l-1.308-2.325A6 6 0 1 1 6 12H4a8 8 0 1 0 7.684-7.994L13 1.666z"
      />
    </Svg>
  );
};

export const Repeat = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
