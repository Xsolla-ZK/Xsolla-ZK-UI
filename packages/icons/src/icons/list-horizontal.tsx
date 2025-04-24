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
        d="m7 4 1 8-1 8H5l-1-8 1-8zM13 4l1 8-1 8h-2l-1-8 1-8zM20 12l-1-8h-2l-1 8 1 8h2z"
      />
    </Svg>
  );
};

export const ListHorizontal = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
