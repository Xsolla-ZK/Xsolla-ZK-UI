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
        d="m12 8.5 2-.5V6l-2-.5-2 .5v2zM12 10.5l6 .5v2l-6 .5-6-.5v-2zM21 18l-9 .5-9-.5v-2l9-.5 9 .5z"
      />
    </Svg>
  );
};

export const SortUp = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
