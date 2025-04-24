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
        fillRule="evenodd"
        d="M12 18.001C11.088 20.429 9.636 22 8 22c-2.761 0-5-4.477-5-10S5.239 2 8 2c1.636 0 3.088 1.57 4 3.999C12.912 3.571 14.364 2 16 2c2.761 0 5 4.477 5 10s-2.239 10-5 10c-1.636 0-3.088-1.57-4-3.999M9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Eyes = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
