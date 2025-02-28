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
        d="M5 21h2.675v-4.675H3V19q0 .824.587 1.413Q4.176 21 5 21m4.675 0h4.65v-4.675h-4.65zm6.65 0H19q.824 0 1.413-.587Q21 19.825 21 19v-2.675h-4.675zM3 14.325h4.675v-4.65H3zm6.675 0h4.65v-4.65h-4.65zm6.65 0H21v-4.65h-4.675zM3 7.675h4.675V3H5q-.824 0-1.412.587A1.93 1.93 0 0 0 3 5zm6.675 0h4.65V3h-4.65zm6.65 0H21V5q0-.824-.587-1.412A1.93 1.93 0 0 0 19 3h-2.675z"
      />
    </Svg>
  );
};

export const Grid3x3 = memo<IconProps>(themed(Icon));
