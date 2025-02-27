import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const TripleArrowRight = memo<IconProps>(
  themed((props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        {...otherProps}
      >
        <Path fill={color} d="M2 7.4 6.575 12 2 16.6 3.4 18l6-6-6-6z" />
        <Path fill={color} d="m8.6 7.4 4.575 4.6L8.6 16.6 10 18l6-6-6-6z" />
        <Path fill={color} d="m15.2 7.4 4.575 4.6-4.575 4.6 1.4 1.4 6-6-6-6z" />
      </Svg>
    );
  }),
);
