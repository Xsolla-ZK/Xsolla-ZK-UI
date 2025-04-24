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
        d="M15.75 2H7v17h14V7.1zM19 8l-4-4v4z"
        clipRule="evenodd"
      />
      <Path fill={color} d="M4 5h2v17H4z" />
      <Path fill={color} d="M18 20v2H4v-2z" />
    </Svg>
  );
};

export const Documents = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
