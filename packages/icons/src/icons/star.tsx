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
        d="M15.527 7.146 12 2 8.473 7.146 2.49 8.91l3.804 4.944-.171 6.236L12 18l5.878 2.09-.172-6.236L21.51 8.91z"
      />
    </Svg>
  );
};

export const Star = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
