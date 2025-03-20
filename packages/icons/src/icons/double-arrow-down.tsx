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
        d="m12 19-6-6 1.4-1.4 4.6 4.575 4.6-4.575L18 13zm0-6L6 7l1.4-1.4 4.6 4.575L16.6 5.6 18 7z"
      />
    </Svg>
  );
};

export const DoubleArrowDown = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
