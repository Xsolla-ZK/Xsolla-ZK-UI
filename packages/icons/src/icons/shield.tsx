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
        d="M20.696 11.519 21 3H3l.304 8.519a10 10 0 0 0 4.924 8.262L12 22l3.772-2.219a10 10 0 0 0 4.924-8.262"
      />
    </Svg>
  );
};

export const Shield = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
