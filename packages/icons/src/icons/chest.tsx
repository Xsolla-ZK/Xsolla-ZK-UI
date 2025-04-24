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
      <Path fill={color} d="M2 10h20l-3-6H5z" />
      <Path
        fill={color}
        fillRule="evenodd"
        d="m20 20 2-9H2l2 9zm-8-7-2 2 1.286 1.286L11 18h2l-.286-1.714L14 15z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Chest = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
