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
        d="M17.5 13 22 8l-4.5-5-1.5.833L17.71 7H11v2h6.71L16 12.167zM6.5 11 2 16l4.5 5 1.5-.833L6.29 17H13v-2H6.29L8 11.833z"
      />
    </Svg>
  );
};

export const SwapHorizontal = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
