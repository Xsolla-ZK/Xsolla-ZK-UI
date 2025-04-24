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
        d="m7 2-.478 3.108L18.414 17H22v-4l-3.333-.167L17 2zM13.586 17l5.707 5.707 1.414-1.414-18-18-1.414 1.414 4.585 4.585-.443 2.88L2 12v5z"
      />
      <Path fill={color} d="m9 18 6 1v3H9z" />
    </Svg>
  );
};

export const BellSlash = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
