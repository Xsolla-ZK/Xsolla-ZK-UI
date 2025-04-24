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
        d="M12 3 8 9h8zM11.5 21 3 10h8.5zM12.5 21 21 10h-8.5zM17 9l-4-6h4l4 6zM11 3 7 9H3l4-6z"
      />
    </Svg>
  );
};

export const Diamond = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
