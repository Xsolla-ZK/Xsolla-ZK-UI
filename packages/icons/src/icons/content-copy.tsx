import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const ContentCopy = memo<IconProps>(
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
          d="M9 18q-.825 0-1.412-.587A1.93 1.93 0 0 1 7 16V4q0-.824.588-1.412A1.93 1.93 0 0 1 9 2h9q.824 0 1.413.587Q20 3.176 20 4v12q0 .824-.587 1.413A1.93 1.93 0 0 1 18 18zm-4 4q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 20V6h2v14h11v2z"
        />
      </Svg>
    );
  }),
);
