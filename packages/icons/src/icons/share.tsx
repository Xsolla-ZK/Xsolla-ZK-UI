import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const Share = memo<IconProps>(
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
          d="M17 22a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 14 19q0-.15.075-.7L7.05 14.2A2.97 2.97 0 0 1 5 15a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 2 12q0-1.25.875-2.125A2.9 2.9 0 0 1 5 9a2.97 2.97 0 0 1 2.05.8l7.025-4.1a1.7 1.7 0 0 1-.062-.338A5 5 0 0 1 14 5q0-1.25.875-2.125A2.9 2.9 0 0 1 17 2q1.25 0 2.125.875T20 5t-.875 2.125A2.9 2.9 0 0 1 17 8a2.97 2.97 0 0 1-2.05-.8l-7.025 4.1q.05.176.063.337Q8 11.801 8 12q0 .2-.013.363t-.062.337l7.025 4.1A2.97 2.97 0 0 1 17 16q1.25 0 2.125.875T20 19t-.875 2.125A2.9 2.9 0 0 1 17 22"
        />
      </Svg>
    );
  }),
);
