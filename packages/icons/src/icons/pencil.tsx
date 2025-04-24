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
        d="M18.4 10.028 13.973 5.6l1.185-1.185a2 2 0 0 1 2.828 0l1.6 1.6a2 2 0 0 1 0 2.83zM9.19 19.24l-5.168.738.738-5.167 8.505-8.505 4.429 4.43z"
      />
    </Svg>
  );
};

export const Pencil = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
