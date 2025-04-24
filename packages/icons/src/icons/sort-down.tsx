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
        d="m3 6 9-.5 9 .5v2l-9 .5L3 8zM12 13.5 6 13v-2l6-.5 6 .5v2zM12 15.5l-2 .5v2l2 .5 2-.5v-2z"
      />
    </Svg>
  );
};

export const SortDown = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
