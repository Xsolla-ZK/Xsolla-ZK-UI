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
        d="M7.9 14.686 2 13v-1h10v10h-1l-1.686-5.9-5.607 5.607-1.414-1.414zM12 12V2h1l1.686 5.9 5.607-5.607 1.414 1.414L16.1 9.314 22 11v1z"
      />
    </Svg>
  );
};

export const CollapseDiagonal = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
