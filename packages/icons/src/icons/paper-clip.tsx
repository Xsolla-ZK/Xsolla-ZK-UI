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
      <Path fill={color} d="M19 22 18 7h-2v13H9V4h4v13h-1V5h-2v14h5V2H7L6 22z" />
    </Svg>
  );
};

export const PaperClip = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
