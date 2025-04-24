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
        d="M6.5 2.474 12 3.75l5.5-1.276 1.645 5.401L23 12l-3.855 4.125-1.645 5.401L12 20.25l-5.5 1.276-1.645-5.401L1 12l3.855-4.125zM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Settings = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
