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
        d="M3.4 22 2 20.6 8.6 14H4v-2h8v8h-2v-4.6zM12 12V4h2v4.6L20.6 2 22 3.4 15.4 10H20v2z"
      />
    </Svg>
  );
};

export const CollapseDiagonal = memo<IconProps>(themed(Icon));
