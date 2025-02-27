import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const PaperClip = memo<IconProps>(
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
          d="M18 15.75q0 2.6-1.825 4.425Q14.349 22 11.75 22q-2.6 0-4.425-1.825T5.5 15.75V6.5q0-1.875 1.313-3.187Q8.124 2 10 2t3.188 1.313T14.5 6.5v8.75q0 1.15-.8 1.95t-1.95.8a2.65 2.65 0 0 1-1.95-.8 2.65 2.65 0 0 1-.8-1.95V6h2v9.25a.73.73 0 0 0 .75.75.73.73 0 0 0 .75-.75V6.5q-.025-1.05-.738-1.775Q11.05 4 10 4t-1.775.725T7.5 6.5v9.25q-.025 1.775 1.225 3.012T11.75 20q1.75 0 2.975-1.238T16 15.75V6h2z"
        />
      </Svg>
    );
  }),
);
