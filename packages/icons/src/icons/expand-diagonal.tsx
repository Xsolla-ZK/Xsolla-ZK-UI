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
        d="M19.314 6.1 21 12h1V2H12v1l5.9 1.686L4.686 17.9 3 12H2v10h10v-1l-5.9-1.686z"
      />
    </Svg>
  );
};

export const ExpandDiagonal = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
