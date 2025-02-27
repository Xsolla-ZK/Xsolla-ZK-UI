import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const DoubleArrowUp = memo<IconProps>(
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
          d="M7.4 18.4 6 17l6-6 6 6-1.4 1.4-4.6-4.575zm0-6L6 11l6-6 6 6-1.4 1.4L12 7.825z"
        />
      </Svg>
    );
  }),
);
