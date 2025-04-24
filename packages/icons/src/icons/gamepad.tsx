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
        d="M1 20 3.333 4h17.334L23 20h-5.833l-.22-3H7.053l-.219 3zm13.5-7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9 13v-2h2V9H9V7H7v2H5v2h2v2z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Gamepad = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
