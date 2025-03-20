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
        d="M6 3h10v13l-7 7-1.25-1.25a1.3 1.3 0 0 1-.287-.475 1.6 1.6 0 0 1-.113-.575v-.35L8.45 16H3q-.8 0-1.4-.6T1 14v-2a2 2 0 0 1 .15-.75l3-7.05q.225-.5.75-.85T6 3m12 13V3h4v13z"
      />
    </Svg>
  );
};

export const ThumbDown = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
