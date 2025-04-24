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
        d="M18 6.5 12 2 6 6.5 7 8l4-1.8v11.6L7 16l-1 1.5 6 4.5 6-4.5-1-1.5-4 1.8V6.2L17 8z"
      />
    </Svg>
  );
};

export const ArrowBidirectionalVertical = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
