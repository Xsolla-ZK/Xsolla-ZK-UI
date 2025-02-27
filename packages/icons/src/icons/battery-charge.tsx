import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const BatteryCharge = memo<IconProps>(
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
          d="M16.5 22v-3H14l3.5-5v3H20zM8 22a.97.97 0 0 1-.713-.288A.97.97 0 0 1 7 21V5q0-.424.287-.713A.97.97 0 0 1 8 4h2V2h4v2h2q.424 0 .712.287Q17 4.576 17 5v7q-.525 0-1.025.088a5.6 5.6 0 0 0-.975.262V6H9v14h2.35q.2.575.488 1.075.287.5.687.925z"
        />
      </Svg>
    );
  }),
);
