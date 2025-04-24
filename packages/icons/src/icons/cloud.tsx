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
        d="M18 11a4 4 0 0 1 0 8H6v-.027a4.5 4.5 0 0 1 .08-8.954A6.002 6.002 0 0 1 18 11"
      />
    </Svg>
  );
};

export const Cloud = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
