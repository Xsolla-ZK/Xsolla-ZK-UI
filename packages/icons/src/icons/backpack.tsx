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
        d="M7 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 20v-8q0-2.125 1.112-3.8A6.9 6.9 0 0 1 9 5.7V5q0-1.25.875-2.125A2.9 2.9 0 0 1 12 2q1.25 0 2.125.875T15 5v.7a6.9 6.9 0 0 1 2.887 2.5Q19 9.875 19 12v8q0 .824-.587 1.413A1.93 1.93 0 0 1 17 22zm8-6q.424 0 .713-.287A.97.97 0 0 0 16 15v-3H8v2h6v1q0 .424.287.713.288.287.713.287M11 5.1q.275-.05.5-.075T12 5t.5.025.5.075V5a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 4a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 5z"
      />
    </Svg>
  );
};

export const Backpack = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
