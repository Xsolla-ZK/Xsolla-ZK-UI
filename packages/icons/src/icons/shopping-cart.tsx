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
        d="M7.52 11.918 4 4H2V2h3l1 2h16l-4 9H9.202l-1.333 2H19v2H4.131zM10 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0M19 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </Svg>
  );
};

export const ShoppingCart = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
