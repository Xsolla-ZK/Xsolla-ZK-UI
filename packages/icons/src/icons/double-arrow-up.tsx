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
        d="M7.4 18.4 6 17l6-6 6 6-1.4 1.4-4.6-4.575zm0-6L6 11l6-6 6 6-1.4 1.4L12 7.825z"
      />
    </Svg>
  );
};

export const DoubleArrowUp = memo<IconProps>(themed(Icon));
