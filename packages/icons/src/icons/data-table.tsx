import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const DataTable = memo<IconProps>(
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
          d="M3 8V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h14q.824 0 1.413.587Q21 4.176 21 5v3zm2 13q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19v-9h4.5v11zm11.5 0V10H21v9q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm-7 0V10h5v11z"
        />
      </Svg>
    );
  }),
);
