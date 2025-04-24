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
        d="m18.364 16.95-1.414 1.414-4.95-3.85-4.95 3.85-1.414-1.414L9.486 12l-3.85-4.95L7.05 5.636 12 9.486l4.95-3.85 1.414 1.414-3.85 4.95z"
      />
    </Svg>
  );
};

export const Cross = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
