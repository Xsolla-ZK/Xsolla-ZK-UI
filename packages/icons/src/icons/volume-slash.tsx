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
        d="m12 15.414 7.293 7.293 1.414-1.414-18-18-1.414 1.414 5.155 5.155L3 9v6l4-1 5 6zM9.007 7.592 12 10.586V4zM20 12l-.94 5.645-1.343-1.342L17 12l1-6h1zM13.083 11.669 14 8h1l1 4-.517 2.069z"
      />
    </Svg>
  );
};

export const VolumeSlash = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
