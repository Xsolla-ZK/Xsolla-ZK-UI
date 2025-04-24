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
        d="M4 4h4v4H4zM4 10h4v4H4zM8 16H4v4h4zM10 4h4v4h-4zM14 10h-4v4h4zM10 16h4v4h-4zM20 4h-4v4h4zM16 10h4v4h-4zM20 16h-4v4h4z"
      />
    </Svg>
  );
};

export const Grid3x3 = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
