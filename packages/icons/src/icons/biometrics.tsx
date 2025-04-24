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
        d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-10-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6 2 3 3 3-3z"
        clipRule="evenodd"
      />
      <Path
        fill={color}
        d="M2 2h4v2H4v2H2zM6 22v-2H4v-2H2v4zM18 2h4v4h-2V4h-2zM18 22v-2h2v-2h2v4z"
      />
    </Svg>
  );
};

export const Biometrics = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
