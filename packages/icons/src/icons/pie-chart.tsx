import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const PieChart = memo<IconProps>(
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
          d="M13 11V2.1q3.575.375 6.038 2.85T21.9 11zm-1.975 10.875q-3.8-.375-6.362-3.2T2.1 12q0-3.875 2.563-6.7 2.562-2.825 6.362-3.2zm1.975 0v-8.9h8.9q-.35 3.574-2.837 6.063-2.488 2.487-6.063 2.837"
        />
      </Svg>
    );
  }),
);
