import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const Link = memo<IconProps>(
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
          d="M11 17H7q-2.074 0-3.537-1.463T2 12q0-2.075 1.463-3.537Q4.925 7 7 7h4v2H7q-1.25 0-2.125.875A2.9 2.9 0 0 0 4 12q0 1.25.875 2.125A2.9 2.9 0 0 0 7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875A2.9 2.9 0 0 0 20 12q0-1.25-.875-2.125A2.9 2.9 0 0 0 17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.462 3.537Q19.074 17 17 17z"
        />
      </Svg>
    );
  }),
);
