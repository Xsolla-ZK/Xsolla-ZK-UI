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
        d="M10.295 9.047 11 2h2l.705 7.047 6.455-2.913 1 1.732L15.41 12l5.75 4.134-1 1.732-6.455-2.913L13 22h-2l-.705-7.047-6.455 2.913-1-1.732L8.59 12 2.84 7.866l1-1.732z"
      />
    </Svg>
  );
};

export const Asterisk = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
