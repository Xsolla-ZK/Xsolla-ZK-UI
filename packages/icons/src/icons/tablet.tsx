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
        d="M3 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 1 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 3 4h18q.824 0 1.413.588Q23 5.175 23 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 21 20zm3-2h12V6H6z"
      />
    </Svg>
  );
};

export const Tablet = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
