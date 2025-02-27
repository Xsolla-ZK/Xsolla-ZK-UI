import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const DoubleArrowDown = memo<IconProps>(
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
          d="m12 19-6-6 1.4-1.4 4.6 4.575 4.6-4.575L18 13zm0-6L6 7l1.4-1.4 4.6 4.575L16.6 5.6 18 7z"
        />
      </Svg>
    );
  }),
);
