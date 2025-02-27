import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const TripleArrowUpRight = memo<IconProps>(
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
        <Path fill={color} d="m8.798 15.201-6.488-.017v-1.98h8.485v8.485h-1.98z" />
        <Path fill={color} d="m6.91 10.58 6.488.018.017 6.487h1.98V8.6H6.91z" />
        <Path fill={color} d="m11.51 5.98 6.488.018.017 6.487h1.98V4H11.51z" />
      </Svg>
    );
  }),
);
