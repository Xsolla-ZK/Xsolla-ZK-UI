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
        d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812 2.388 10.4A6.7 6.7 0 0 1 2 8.15Q2 5.8 3.575 4.225T7.5 2.65a5.8 5.8 0 0 1 2.475.55A5.9 5.9 0 0 1 12 4.75a5.9 5.9 0 0 1 2.025-1.55 5.8 5.8 0 0 1 2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963T13.45 19.7z"
      />
    </Svg>
  );
};

export const Heart = memo<IconProps>(themed(Icon));
