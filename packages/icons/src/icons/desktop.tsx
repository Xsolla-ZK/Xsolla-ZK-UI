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
        d="M8 21v-1l2-2H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 16V5q0-.824.587-1.412A1.93 1.93 0 0 1 4 3h16q.824 0 1.413.587Q22 4.176 22 5v11q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18h-6l2 2v1z"
      />
    </Svg>
  );
};

export const Desktop = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
