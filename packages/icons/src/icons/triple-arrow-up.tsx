import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const TripleArrowUp = memo<IconProps>(
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
        <Path
          fill={color}
          d="m6 8 1.4 1.4L12 4.825 16.6 9.4 18 8l-6-6zM6 20l1.4 1.4 4.6-4.575 4.6 4.575L18 20l-6-6z"
        />
        <Path fill={color} d="m6 14 1.4 1.4 4.6-4.575 4.6 4.575L18 14l-6-6z" />
      </Svg>
    );
  }),
);
