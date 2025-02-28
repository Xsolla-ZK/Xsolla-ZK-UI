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
        d="m2.45 10.575 4.2-4.2q.35-.35.825-.5.476-.15.975-.05l1.3.275Q8.4 7.7 7.625 9t-1.5 3.15zm5.125 2.275a15.3 15.3 0 0 1 1.563-3.4 16.5 16.5 0 0 1 2.387-3 14.3 14.3 0 0 1 5.025-3.288q2.825-1.087 5.275-.662.425 2.45-.65 5.275A14.2 14.2 0 0 1 17.9 12.8a16.8 16.8 0 0 1-3 2.387 15.2 15.2 0 0 1-3.425 1.588zm6.9-3a1.92 1.92 0 0 0 1.412.575A1.92 1.92 0 0 0 17.3 9.85a1.92 1.92 0 0 0 .575-1.413 1.92 1.92 0 0 0-.575-1.412 1.92 1.92 0 0 0-1.413-.575 1.92 1.92 0 0 0-1.412.575 1.92 1.92 0 0 0-.575 1.412q0 .838.575 1.413m-.7 12.025-1.6-3.675q1.85-.725 3.162-1.5 1.313-.775 2.913-2.125l.25 1.3q.1.5-.05.988t-.5.837zM4.05 16.05a2.94 2.94 0 0 1 2.125-.888 2.85 2.85 0 0 1 2.125.863q.875.875.875 2.125T8.3 20.275q-.625.625-2.087 1.075t-4.038.8q.35-2.575.8-4.025T4.05 16.05"
      />
    </Svg>
  );
};

export const Rocket = memo<IconProps>(themed(Icon));
