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
        d="m16 2 3.536 3.536.707 4.95-9.9 9.899-4.95-.707-3.535-3.536L6.1 11.9l4.242 2.828 4.243-4.243-2.829-4.242z"
      />
    </Svg>
  );
};

export const Phone = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
