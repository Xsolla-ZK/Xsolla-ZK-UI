import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const DoubleArrowLeft = memo<IconProps>(
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
          d="m11 18-6-6 6-6 1.4 1.4L7.825 12l4.575 4.6zm6.6 0-6-6 6-6L19 7.4 14.425 12 19 16.6z"
        />
      </Svg>
    );
  }),
);
