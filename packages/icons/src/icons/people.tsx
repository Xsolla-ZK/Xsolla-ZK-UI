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
        d="M0 18v-1.575q0-1.075 1.1-1.75T4 14q.325 0 .625.012.3.014.575.063-.35.525-.525 1.1a4.1 4.1 0 0 0-.175 1.2V18zm6 0v-1.625q0-.799.438-1.463.437-.662 1.237-1.162.799-.5 1.913-.75 1.112-.25 2.412-.25 1.325 0 2.438.25 1.112.25 1.912.75t1.225 1.162.425 1.463V18zm13.5 0v-1.625q0-.65-.163-1.225a4 4 0 0 0-.487-1.075q.274-.05.563-.062Q19.7 14 20 14q1.8 0 2.9.662 1.1.663 1.1 1.763V18zM4 13q-.824 0-1.412-.588A1.93 1.93 0 0 1 2 11q0-.85.587-1.425A1.95 1.95 0 0 1 4 9q.85 0 1.425.575T6 11q0 .825-.575 1.412A1.91 1.91 0 0 1 4 13m16 0q-.824 0-1.413-.588A1.93 1.93 0 0 1 18 11q0-.85.587-1.425A1.95 1.95 0 0 1 20 9q.85 0 1.425.575T22 11q0 .825-.575 1.412A1.91 1.91 0 0 1 20 13m-8-1a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 9 9q0-1.275.875-2.137T12 6q1.275 0 2.137.862Q15 7.726 15 9q0 1.25-.863 2.125Q13.276 12 12 12"
      />
    </Svg>
  );
};

export const People = memo<IconProps>(themed(Icon));
