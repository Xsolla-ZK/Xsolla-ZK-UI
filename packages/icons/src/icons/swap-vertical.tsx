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
        d="M13 6.5 8 2 3 6.5 3.833 8 7 6.29V13h2V6.29L12.167 8zM11 17.5l5 4.5 5-4.5-.833-1.5L17 17.71V11h-2v6.71L11.833 16z"
      />
    </Svg>
  );
};

export const SwapVertical = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
