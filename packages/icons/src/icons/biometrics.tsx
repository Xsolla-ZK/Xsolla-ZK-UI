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
        d="M12 4q3.35 0 5.675 2.325T20 12t-2.325 5.675T12 20t-5.675-2.325T4 12t2.325-5.675T12 4m0 11.5q1.2 0 2.15-.687A3.72 3.72 0 0 0 15.5 13h-7q.4 1.125 1.35 1.813T12 15.5M8.5 10q0 .424.287.713.288.287.713.287.424 0 .713-.287A.97.97 0 0 0 10.5 10a.97.97 0 0 0-.287-.713A.97.97 0 0 0 9.5 9a.97.97 0 0 0-.713.287A.97.97 0 0 0 8.5 10m5 0q0 .424.287.713.288.287.713.287.424 0 .713-.287A.97.97 0 0 0 15.5 10a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14.5 9a.97.97 0 0 0-.713.287.97.97 0 0 0-.287.713M1 6V3q0-.824.587-1.412A1.93 1.93 0 0 1 3 1h3v2H3v3zm5 17H3q-.824 0-1.412-.587A1.93 1.93 0 0 1 1 21v-3h2v3h3zm12 0v-2h3v-3h2v3q0 .824-.587 1.413A1.93 1.93 0 0 1 21 23zm3-17V3h-3V1h3q.824 0 1.413.587Q23 2.176 23 3v3z"
      />
    </Svg>
  );
};

export const Biometrics = memo<IconProps>(themed(Icon));
