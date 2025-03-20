import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';
import type { ComponentProps, FC } from 'react';

type Props = ComponentProps<typeof Svg> & {
  size: number;
};

const Icon: FC = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props as Props;
  return (
    <Svg fill="none" viewBox="0 0 24 24" width={size} height={size} {...otherProps}>
      <Path
        fill={color}
        d="m21.4 14.25-7.15 7.15q-.3.3-.675.45t-.75.15-.75-.15-.675-.45l-8.825-8.825a1.975 1.975 0 0 1-.575-1.4V4q0-.824.587-1.412A1.93 1.93 0 0 1 4 2h7.175q.4 0 .775.163.375.162.65.437l8.8 8.825q.3.3.438.675.137.375.137.75t-.138.738a1.9 1.9 0 0 1-.437.662M6.5 8q.624 0 1.063-.437Q8 7.125 8 6.5t-.437-1.062A1.45 1.45 0 0 0 6.5 5q-.625 0-1.062.438A1.45 1.45 0 0 0 5 6.5q0 .624.438 1.063Q5.874 8 6.5 8"
      />
    </Svg>
  );
};

export const Tag = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
