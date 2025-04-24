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
      <Path fill={color} d="M12 2v10h10v-2l-7-1-1-7z" />
      <Path fill={color} d="M7 17V7h2l1 7 7 1v2z" />
      <Path fill={color} d="M2 22V12h2l1 7 7 1v2z" />
    </Svg>
  );
};

export const TripleArrowDownLeft = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
