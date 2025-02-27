import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const Repeat = memo<IconProps>(
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
          d="M12 22q-1.874 0-3.512-.712a9.2 9.2 0 0 1-2.85-1.925 9.2 9.2 0 0 1-1.925-2.85A8.7 8.7 0 0 1 3 13h2q0 2.925 2.037 4.962T12 20t4.962-2.038T19 13t-2.038-4.962T12 6h-.15l1.55 1.55L12 9 8 5l4-4 1.4 1.45L11.85 4H12q1.874 0 3.512.713a9.2 9.2 0 0 1 2.85 1.925 9.2 9.2 0 0 1 1.926 2.85A8.7 8.7 0 0 1 21 13q0 1.874-.712 3.512a9.2 9.2 0 0 1-1.925 2.85 9.2 9.2 0 0 1-2.85 1.926A8.7 8.7 0 0 1 12 22"
        />
      </Svg>
    );
  }),
);
