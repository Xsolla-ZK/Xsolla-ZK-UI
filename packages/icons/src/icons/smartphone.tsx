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
        d="M7 23q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 21V3q0-.824.588-1.412A1.93 1.93 0 0 1 7 1h10q.824 0 1.413.587Q19 2.176 19 3v18q0 .824-.587 1.413A1.93 1.93 0 0 1 17 23zm0-5h10V6H7z"
      />
    </Svg>
  );
};

export const Smartphone = memo<IconProps>(themed(Icon));
