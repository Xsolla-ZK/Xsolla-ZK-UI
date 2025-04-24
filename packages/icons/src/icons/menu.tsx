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
        d="m12 8 9-1V5l-9-1-9 1v2zM12 14l9-1v-2l-9-1-9 1v2zM12 16l9 1v2l-9 1-9-1v-2z"
      />
    </Svg>
  );
};

export const Menu = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
