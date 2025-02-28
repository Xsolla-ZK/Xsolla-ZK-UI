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
        d="M9.575 12 5 7.4 6.4 6l6 6-6 6L5 16.6zm6.6 0L11.6 7.4 13 6l6 6-6 6-1.4-1.4z"
      />
    </Svg>
  );
};

export const DoubleArrowRight = memo<IconProps>(themed(Icon));
