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
        d="m7 14-4 1V9l4 1 5-6v16zM19 6h-1l-1 6 1 6h1l1-6zM13 12l1-4h1l1 4-1 4h-1z"
      />
    </Svg>
  );
};

export const VolumeUp = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
