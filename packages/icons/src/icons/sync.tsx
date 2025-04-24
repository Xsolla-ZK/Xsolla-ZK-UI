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
        d="m8 5 3.75-4 1.25.667-1.316 2.34A8 8 0 0 1 18.928 16l-1.732-1a6 6 0 0 0-5.504-8.992L13 8.333 11.75 9zM6.013 12.392A6 6 0 0 1 6.803 9L5.073 8a8 8 0 0 0 7.244 11.994L11 22.334l1.25.666L16 19l-3.75-4-1.25.667 1.308 2.325a6 6 0 0 1-6.295-5.6"
      />
    </Svg>
  );
};

export const Sync = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
