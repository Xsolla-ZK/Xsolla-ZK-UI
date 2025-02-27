import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const ListVertical = memo<IconProps>(
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
          d="M5 11q-.824 0-1.412-.588A1.93 1.93 0 0 1 3 9V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h14q.824 0 1.413.587Q21 4.176 21 5v4q0 .825-.587 1.412A1.93 1.93 0 0 1 19 11zm0 10q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19v-4q0-.825.587-1.412A1.93 1.93 0 0 1 5 13h14q.824 0 1.413.588Q21 14.175 21 15v4q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21z"
        />
      </Svg>
    );
  }),
);
