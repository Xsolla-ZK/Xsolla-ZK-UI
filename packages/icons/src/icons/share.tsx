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
        d="M18 8a3 3 0 1 0-2.947-2.438L7.939 9.71a3 3 0 1 0 0 4.578l7.114 4.15Q15 18.71 15 19a3 3 0 1 0 1.06-2.289l-7.112-4.15a3 3 0 0 0 0-1.123L16.06 7.29C16.584 7.732 17.26 8 18 8"
      />
    </Svg>
  );
};

export const Share = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
