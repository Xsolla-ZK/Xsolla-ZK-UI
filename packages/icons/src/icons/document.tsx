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
        d="m14 2 6 6v14H4V2zm-1 2 5 5h-5zM6 15h8v2H6zm8 3H6v2h8z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Document = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
