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
        d="M16 5.75 12 2 8 5.75 8.667 7 11 5.688V10h2V5.688L15.333 7zM8.667 17 8 18.25 12 22l4-3.75-.667-1.25L13 18.313V14h-2v4.313zM17 8.667 18.25 8 22 12l-3.75 4-1.25-.667L18.313 13H14v-2h4.313zM5.75 8 2 12l3.75 4L7 15.333 5.688 13H10v-2H5.688L7 8.667z"
      />
    </Svg>
  );
};

export const OpenWith = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
