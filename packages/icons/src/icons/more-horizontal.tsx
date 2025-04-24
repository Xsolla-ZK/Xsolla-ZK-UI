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
        d="m8 11-1-1H5l-1 1v2l1 1h2l1-1zM14 11l-1-1h-2l-1 1v2l1 1h2l1-1zM20 11l-1-1h-2l-1 1v2l1 1h2l1-1z"
      />
    </Svg>
  );
};

export const MoreHorizontal = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
