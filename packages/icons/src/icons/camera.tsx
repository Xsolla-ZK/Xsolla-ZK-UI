import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const Camera = memo<IconProps>(
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
          d="M12 17.5q1.875 0 3.188-1.312Q16.5 14.875 16.5 13t-1.312-3.187T12 8.5 8.813 9.813Q7.499 11.125 7.5 13q0 1.875 1.313 3.188Q10.125 17.5 12 17.5m0-2q-1.05 0-1.775-.725T9.5 13t.725-1.775T12 10.5t1.775.725T14.5 13t-.725 1.775T12 15.5M4 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 19V7q0-.824.587-1.412A1.93 1.93 0 0 1 4 5h3.15L9 3h6l1.85 2H20q.824 0 1.413.588Q22 6.175 22 7v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 21z"
        />
      </Svg>
    );
  }),
);
