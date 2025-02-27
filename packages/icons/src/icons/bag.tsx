import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const Bag = memo<IconProps>(
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
          d="M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V8q0-.824.588-1.412A1.93 1.93 0 0 1 6 6h2q0-1.65 1.175-2.825T12 2t2.825 1.175T16 6h2q.824 0 1.413.588Q20 7.175 20 8v12q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zm4-16h4q0-.824-.588-1.412A1.93 1.93 0 0 0 12 4q-.825 0-1.412.588A1.93 1.93 0 0 0 10 6m5 5q.424 0 .713-.287A.97.97 0 0 0 16 10V8h-2v2q0 .424.287.713.288.287.713.287m-6 0q.424 0 .713-.287A.97.97 0 0 0 10 10V8H8v2q0 .424.287.713Q8.576 11 9 11"
        />
      </Svg>
    );
  }),
);
