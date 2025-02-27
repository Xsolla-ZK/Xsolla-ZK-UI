import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const ArrowBidirectionalHorizontal = memo<IconProps>(
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
          d="m2 12 7 7 1.425-1.4-4.6-4.6h12.35l-4.6 4.6L15 19l7-7-7-7-1.4 1.4 4.575 4.6H5.825L10.4 6.4 9 5z"
        />
      </Svg>
    );
  }),
);
