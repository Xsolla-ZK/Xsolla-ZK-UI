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
        d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425.362-.15.762-.15t.775.15.65.45L20.425 5q.3.275.438.65a2.17 2.17 0 0 1 0 1.512 1.9 1.9 0 0 1-.438.663L7.25 21zM17.6 7.8 19 6.4 17.6 5l-1.4 1.4z"
      />
    </Svg>
  );
};

export const Pencil = memo<IconProps>(themed(Icon));
