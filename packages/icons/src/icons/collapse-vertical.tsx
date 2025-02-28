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
        d="M7.4 22 6 20.6l6-6 6 6-1.4 1.4-4.6-4.6zM12 9.4l-6-6L7.4 2 12 6.6 16.6 2 18 3.4z"
      />
    </Svg>
  );
};

export const CollapseVertical = memo<IconProps>(themed(Icon));
