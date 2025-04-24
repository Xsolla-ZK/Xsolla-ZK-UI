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
        d="m13 8 1-1V5l-1-1h-2l-1 1v2l1 1zM13 10l1 1v2l-1 1h-2l-1-1v-2l1-1zM13 20l1-1v-2l-1-1h-2l-1 1v2l1 1z"
      />
    </Svg>
  );
};

export const MoreVertical = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
