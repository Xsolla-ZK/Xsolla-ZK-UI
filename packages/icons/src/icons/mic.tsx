import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const Mic = memo<IconProps>(
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
          d="M12 14a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 9 11V5q0-1.25.875-2.125A2.9 2.9 0 0 1 12 2q1.25 0 2.125.875T15 5v6q0 1.25-.875 2.125A2.9 2.9 0 0 1 12 14m-1 7v-3.075q-2.6-.35-4.3-2.325T5 11h2q0 2.075 1.463 3.537Q9.926 16 12 16q2.075 0 3.537-1.463Q17 13.075 17 11h2q0 2.625-1.7 4.6T13 17.925V21z"
        />
      </Svg>
    );
  }),
);
