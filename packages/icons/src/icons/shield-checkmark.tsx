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
        fillRule="evenodd"
        d="M3.304 11.519 3 3h18l-.304 8.519a10 10 0 0 1-4.924 8.262L12 22l-3.772-2.219a10 10 0 0 1-4.924-8.262M11 15l-3-3 1-1 2 1 4-3 1 1z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const ShieldCheckmark = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
