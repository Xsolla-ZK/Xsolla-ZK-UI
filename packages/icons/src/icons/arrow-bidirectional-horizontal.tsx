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
        d="M6.5 6 2 12l4.5 6L8 17l-1.8-4h11.6L16 17l1.5 1 4.5-6-4.5-6L16 7l1.8 4H6.2L8 7z"
      />
    </Svg>
  );
};

export const ArrowBidirectionalHorizontal = memo<IconProps>(
  themed(Icon, { defaultStrokeWidth: 0 }),
);
