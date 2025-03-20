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
        d="M9 14.25q-.525 0-.887-.363A1.2 1.2 0 0 1 7.75 13q0-.525.363-.887.362-.363.887-.363t.887.363.363.887-.363.887A1.2 1.2 0 0 1 9 14.25m6 0q-.525 0-.887-.363A1.2 1.2 0 0 1 13.75 13q0-.525.363-.887.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887a1.2 1.2 0 0 1-.887.363M12 20q3.35 0 5.675-2.325T20 12q0-.6-.075-1.162a4.8 4.8 0 0 0-.275-1.088q-.525.125-1.05.188-.525.062-1.1.062a9.8 9.8 0 0 1-4.3-.975A10 10 0 0 1 9.75 6.3a9.9 9.9 0 0 1-2.287 3.388A9.8 9.8 0 0 1 4 11.85V12q0 3.35 2.325 5.675T12 20m0 2a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22"
      />
    </Svg>
  );
};

export const Face = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
