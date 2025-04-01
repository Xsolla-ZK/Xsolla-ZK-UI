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
        d="M8 17a5 5 0 0 0 4-2A5 5 0 1 0 12 9a5 5 0 1 0-4 8m0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6m8 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Eyes = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
