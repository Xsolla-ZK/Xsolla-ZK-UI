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
        d="m7 6 1-4h8l1 4h4v2h-2.125L18 22H6L5.125 8H3V6zm2 13-1-9h2v9zm2-9 1 9h1v-9zm4 9-1-9h2v9zM9 4h6v2H9z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Trash = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
