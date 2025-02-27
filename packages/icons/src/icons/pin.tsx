import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const Pin = memo<IconProps>(
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
          d="M12 12q.825 0 1.412-.588Q14 10.826 14 10t-.588-1.412A1.93 1.93 0 0 0 12 8q-.825 0-1.412.588A1.93 1.93 0 0 0 10 10q0 .825.588 1.412Q11.175 12 12 12m0 10q-4.024-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.412-5.975T12 2t5.587 2.225T20 10.2q0 2.5-1.988 5.438T12 22"
        />
      </Svg>
    );
  }),
);
