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
        d="m14.829 2.1 7.07 7.072-5.656 5.656-1.414-1.414 4.242-4.242-4.243-4.243-4.242 4.243-1.414-1.415zM9.172 21.9 2.1 14.828l5.656-5.656 1.415 1.414-4.243 4.242 4.243 4.243 4.242-4.243 1.415 1.415z"
      />
      <Path
        fill={color}
        d="m11.293 11.293-2.475 3.182.707.707 3.182-2.475 2.475-3.182-.707-.707z"
      />
    </Svg>
  );
};

export const Link = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
