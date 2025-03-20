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
        d="m5.825 21 1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625 7.2.625-5.45 4.725L18.175 21 12 17.275z"
      />
    </Svg>
  );
};

export const Star = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
