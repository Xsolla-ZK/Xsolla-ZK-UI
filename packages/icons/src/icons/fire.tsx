import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const Fire = memo<IconProps>(
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
          d="M4 14q0-2.625 1.25-4.675T8 5.875t2.75-2.137L12 3v3.3q0 .925.625 1.463.625.537 1.4.537.425 0 .813-.175t.712-.575L16 7q1.8 1.05 2.9 2.912Q20 11.776 20 14q0 2.2-1.075 4.012a8.1 8.1 0 0 1-2.825 2.863q.425-.6.662-1.312.238-.714.238-1.513a4.8 4.8 0 0 0-.375-1.887 5 5 0 0 0-1.075-1.588L12 11.1l-3.525 3.475a5.1 5.1 0 0 0-1.1 1.6A4.7 4.7 0 0 0 7 18.05q0 .8.237 1.512.238.713.663 1.313a8.1 8.1 0 0 1-2.825-2.863Q4 16.2 4 14m8-.1 2.125 2.075q.425.425.65.95T15 18.05q0 1.225-.875 2.087T12 21t-2.125-.863A2.82 2.82 0 0 1 9 18.05q0-.575.225-1.113.225-.537.65-.962z"
        />
      </Svg>
    );
  }),
);
