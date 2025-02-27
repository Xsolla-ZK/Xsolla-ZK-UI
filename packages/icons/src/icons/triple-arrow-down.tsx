import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const TripleArrowDown = memo<IconProps>(
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
          d="m6 4 6 6 6-6-1.4-1.4L12 7.175 7.4 2.6zM6 16l6 6 6-6-1.4-1.4-4.6 4.575L7.4 14.6z"
        />
        <Path fill={color} d="m6 10 6 6 6-6-1.4-1.4-4.6 4.575L7.4 8.6z" />
      </Svg>
    );
  }),
);
