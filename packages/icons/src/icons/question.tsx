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
        d="M11.95 18q.525 0 .888-.363.362-.362.362-.887t-.362-.887a1.2 1.2 0 0 0-.888-.363q-.525 0-.887.363a1.2 1.2 0 0 0-.363.887q0 .525.363.887.362.363.887.363m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3a7.5 7.5 0 0 0 1.025-1.238q.375-.587.375-1.412 0-1.4-1.025-2.15T12.1 6q-1.424 0-2.312.75T8.55 8.55l1.65.65q.124-.45.563-.975Q11.2 7.7 12.1 7.7q.8 0 1.2.437.4.438.4.963 0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22"
      />
    </Svg>
  );
};

export const Question = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
