import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const Cloud = memo<IconProps>(
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
          d="M6.5 20q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475Q3.349 9.575 5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.962 2.037T19 11q1.725.2 2.863 1.488A4.4 4.4 0 0 1 23 15.5q0 1.875-1.312 3.188Q20.375 20 18.5 20z"
        />
      </Svg>
    );
  }),
);
