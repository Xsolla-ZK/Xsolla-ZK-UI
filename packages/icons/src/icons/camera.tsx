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
      <Path fill={color} d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      <Path
        fill={color}
        fillRule="evenodd"
        d="m17 6-2-3H9L7 6H2v14h20V6zm-1 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Camera = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
