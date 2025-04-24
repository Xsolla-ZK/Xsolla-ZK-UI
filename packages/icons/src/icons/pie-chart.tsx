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
        d="M2 12c0-5.185 3.947-9.449 9-9.95v19.9C5.947 21.45 2 17.186 2 12M21.95 13A10 10 0 0 1 13 21.95V13zM21.95 11A10 10 0 0 0 13 2.05V11z"
      />
    </Svg>
  );
};

export const PieChart = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
