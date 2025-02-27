import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const ArrowBidirectionalVertical = memo<IconProps>(
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
          d="m5 9 7-7 7 7-1.4 1.425-4.6-4.6v12.35l4.6-4.6L19 15l-7 7-7-7 1.4-1.4 4.6 4.575V5.825L6.4 10.4z"
        />
      </Svg>
    );
  }),
);
