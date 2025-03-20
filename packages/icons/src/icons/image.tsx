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
        d="M5 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h14q.824 0 1.413.587Q21 4.176 21 5v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm1-4h12l-3.75-5-3 4L9 13zm2.5-7q.624 0 1.063-.437Q10 9.125 10 8.5t-.437-1.062A1.45 1.45 0 0 0 8.5 7q-.625 0-1.062.438A1.45 1.45 0 0 0 7 8.5q0 .624.438 1.063Q7.875 10 8.5 10"
      />
    </Svg>
  );
};

export const Image = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
