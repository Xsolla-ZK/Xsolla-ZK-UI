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
        d="m11 18-6-6 6-6 1.4 1.4L7.825 12l4.575 4.6zm6.6 0-6-6 6-6L19 7.4 14.425 12 19 16.6z"
      />
    </Svg>
  );
};

export const DoubleArrowLeft = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
