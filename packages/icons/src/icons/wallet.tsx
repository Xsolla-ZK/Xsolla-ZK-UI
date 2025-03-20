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
        d="M6 20q-1.65 0-2.825-1.175T2 16V8q0-1.65 1.175-2.825T6 4h12q1.65 0 2.825 1.175T22 8v8q0 1.65-1.175 2.825T18 20zM6 8h12q.55 0 1.05.125t.95.4V8q0-.824-.587-1.412A1.93 1.93 0 0 0 18 6H6q-.824 0-1.412.588A1.93 1.93 0 0 0 4 8v.525q.45-.275.95-.4A4.3 4.3 0 0 1 6 8m-1.85 3.25 11.125 2.7q.225.05.45 0t.425-.2l3.475-2.9a2.2 2.2 0 0 0-.7-.612A1.87 1.87 0 0 0 18 10H6q-.65 0-1.138.338t-.712.912"
      />
    </Svg>
  );
};

export const Wallet = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
