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
        d="m12 21-4.5-4.5 1.45-1.45L12 18.1l3.05-3.05 1.45 1.45zM8.95 9.05 7.5 7.6 12 3.1l4.5 4.5-1.45 1.45L12 6z"
      />
    </Svg>
  );
};

export const ExpandVertical = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
