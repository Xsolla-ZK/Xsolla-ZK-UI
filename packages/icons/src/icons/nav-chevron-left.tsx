import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, G, Path, Defs } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const NavChevronLeft = memo<IconProps>(
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
        <G clip-path="url(#a)">
          <Path fill={color} d="M10 22 0 12 10 2l1.775 1.775L3.55 12l8.225 8.225z" />
        </G>
        <Defs>
          <clipPath>
            <Path fill={color} d="M0 0h24v24H0z" />
          </clipPath>
        </Defs>
      </Svg>
    );
  }),
);
