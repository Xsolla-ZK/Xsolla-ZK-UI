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
        d="M14 20.725v-2.05q2.25-.65 3.625-2.5t1.375-4.2-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.137T21 11.975t-1.95 5.612T14 20.725M3 15V9h4l5-5v16l-5-5zm11 1V7.95a4.15 4.15 0 0 1 1.838 1.65q.662 1.1.662 2.4 0 1.274-.662 2.363A4.17 4.17 0 0 1 14 16"
      />
    </Svg>
  );
};

export const VolumeUp = memo<IconProps>(themed(Icon));
