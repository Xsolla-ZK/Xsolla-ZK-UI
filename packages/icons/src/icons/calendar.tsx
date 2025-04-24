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
        d="M2 22 3 4h3V2h2v2h8V2h2v2h3l1 18zm17-12H5v10h14z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Calendar = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
