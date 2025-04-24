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
        d="m9 1-.5 3H8a4 4 0 0 0-4 4v14h16V8a4 4 0 0 0-4-4h-.5L15 1zm1.694 2-.166 1h2.944l-.166-1zM14 9h-4l1-2h2zM7 20v-3h6v1h2v-1h2v3zm10-4v-2H7v2z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Backpack = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
