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
        d="M11 21v-6.6l-4.65 4.675-1.425-1.425L9.6 13H3v-2h6.6L4.925 6.35 6.35 4.925 11 9.6V3h2v6.6l4.65-4.675 1.425 1.425L14.4 11H21v2h-6.6l4.675 4.65-1.425 1.425L13 14.4V21z"
      />
    </Svg>
  );
};

export const Asterisk = memo<IconProps>(themed(Icon));
