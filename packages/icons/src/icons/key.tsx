import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const Key = memo<IconProps>(
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
          d="M7 15q1.25 0 2.125-.875A2.9 2.9 0 0 0 10 12q0-1.25-.875-2.125A2.9 2.9 0 0 0 7 9q-1.25 0-2.125.875A2.9 2.9 0 0 0 4 12q0 1.25.875 2.125A2.9 2.9 0 0 0 7 15m0 3q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6q2.026 0 3.537 1.15Q12.05 8.3 12.65 10h8.375L23 11.975l-3.5 4L17 14l-2 2-2-2h-.35a5.8 5.8 0 0 1-2.175 2.9A5.86 5.86 0 0 1 7 18"
        />
      </Svg>
    );
  }),
);
