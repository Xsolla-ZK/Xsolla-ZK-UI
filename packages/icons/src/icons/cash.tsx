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
        d="M3 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 1 18V7h2v11h17v2zm4-4q-.824 0-1.412-.588A1.93 1.93 0 0 1 5 14V6q0-.824.588-1.412A1.93 1.93 0 0 1 7 4h14q.824 0 1.413.588Q23 5.175 23 6v8q0 .825-.587 1.412A1.93 1.93 0 0 1 21 16zm2-2q0-.825-.588-1.412A1.93 1.93 0 0 0 7 12v2zm10 0h2v-2q-.824 0-1.413.588A1.93 1.93 0 0 0 19 14m-5-1q1.25 0 2.125-.875A2.9 2.9 0 0 0 17 10q0-1.25-.875-2.125A2.9 2.9 0 0 0 14 7q-1.25 0-2.125.875A2.9 2.9 0 0 0 11 10q0 1.25.875 2.125A2.9 2.9 0 0 0 14 13M7 8q.824 0 1.412-.588Q9 6.826 9 6H7zm14 0V6h-2q0 .824.587 1.412Q20.176 8 21 8"
      />
    </Svg>
  );
};

export const Cash = memo<IconProps>(themed(Icon));
