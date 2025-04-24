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
        d="M3 3 2 21h20V7h-3l1-4zm14 4 .5-2h-13v2zm-1 8 1-2h2l-1 2z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Wallet = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
