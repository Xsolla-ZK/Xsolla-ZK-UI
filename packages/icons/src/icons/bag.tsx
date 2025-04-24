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
        d="M12 3a5 5 0 0 0-5 5H3L2 21h20L21 8h-4a5 5 0 0 0-5-5m0 2a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Bag = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
