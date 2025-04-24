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
        d="M22 12s-2.727 8-10 8-10-8-10-8 2.727-8 10-8 10 8 10 8m-5 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Eye = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
