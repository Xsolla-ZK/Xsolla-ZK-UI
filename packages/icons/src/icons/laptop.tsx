import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, G, Path, Defs } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';
import type { ComponentProps, FC } from 'react';

type Props = ComponentProps<typeof Svg> & {
  size: number;
};

const Icon: FC = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props as Props;
  return (
    <Svg fill="none" viewBox="0 0 24 24" width={size} height={size} {...otherProps}>
      <G clipPath="url(#a)">
        <Path fill={color} d="M0 20v-2h2V3h20v15h2v2zm10-2h4v-1h-4z" />
      </G>
      <Defs>
        <clipPath>
          <Path fill={color} d="M0 0h24v24H0z" />
        </clipPath>
      </Defs>
    </Svg>
  );
};

export const Laptop = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
