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
        d="m7 20-5-5 5-5 1.4 1.425L5.825 14H13v2H5.825L8.4 18.575zm10-6-1.4-1.425L18.175 10H11V8h7.175L15.6 5.425 17 4l5 5z"
      />
    </Svg>
  );
};

export const SwapHorizontal = memo<IconProps>(themed(Icon));
