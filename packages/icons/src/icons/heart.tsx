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
        d="M2.022 9A5.5 5.5 0 0 1 12 5.337 5.5 5.5 0 0 1 21.978 9H22c0 1.6-.636 3.136-1.768 4.268L12 21.5l-8.232-8.232A6.04 6.04 0 0 1 2 9z"
      />
    </Svg>
  );
};

export const Heart = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
