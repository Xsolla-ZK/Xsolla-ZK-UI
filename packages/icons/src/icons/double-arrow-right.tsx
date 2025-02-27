import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const DoubleArrowRight = memo<IconProps>(
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
          d="M9.575 12 5 7.4 6.4 6l6 6-6 6L5 16.6zm6.6 0L11.6 7.4 13 6l6 6-6 6-1.4-1.4z"
        />
      </Svg>
    );
  }),
);
