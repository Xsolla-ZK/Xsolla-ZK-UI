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
        d="m8.349 2.826.205-.103a7.7 7.7 0 0 1 6.891 0l.206.103a7.15 7.15 0 0 1 2.585 10.6L12 22l-6.236-8.574a7.15 7.15 0 0 1 2.585-10.6m.5 6.324L12 6l3.15 3.15L12 12.3z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Pin = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
