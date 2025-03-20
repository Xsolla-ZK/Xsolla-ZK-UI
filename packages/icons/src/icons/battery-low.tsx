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
        d="M8 22a.97.97 0 0 1-.713-.288A.97.97 0 0 1 7 21V5q0-.424.287-.713A.97.97 0 0 1 8 4h2V2h4v2h2q.424 0 .712.287Q17 4.576 17 5v16q0 .424-.288.712A.97.97 0 0 1 16 22zm1-6h6V6H9z"
      />
    </Svg>
  );
};

export const BatteryLow = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
