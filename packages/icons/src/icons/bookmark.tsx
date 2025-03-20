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
        d="M5 21V5q0-.824.588-1.412A1.93 1.93 0 0 1 7 3h10q.824 0 1.413.587Q19 4.176 19 5v16l-7-3z"
      />
    </Svg>
  );
};

export const Bookmark = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
