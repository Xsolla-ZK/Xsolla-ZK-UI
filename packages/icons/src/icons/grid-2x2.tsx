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
        d="M3 3h8v8H3zm3 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0M21 3h-8v8h8zm-4 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2M3 13v8h8v-8zm4 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2M13 21v-8h8v8zm3-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Grid2x2 = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
