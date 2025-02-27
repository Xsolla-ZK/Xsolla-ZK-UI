import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const TripleArrowDownLeft = memo<IconProps>(
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
        <Path fill={color} d="m15.198 8.798 6.487.017v1.98H13.2V2.31h1.98z" />
        <Path fill={color} d="m17.085 13.42-6.487-.018-.018-6.488H8.6v8.485h8.485z" />
        <Path fill={color} d="m12.485 18.02-6.487-.018-.018-6.488H4v8.485h8.485z" />
      </Svg>
    );
  }),
);
