import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const Settings = memo<IconProps>(
  themed((props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        {...otherProps}
      >
        <Path
          fill={color}
          d="m9.25 22-.4-3.2a4 4 0 0 1-.613-.3 8 8 0 0 1-.562-.375L4.7 19.375l-2.75-4.75 2.575-1.95a2.4 2.4 0 0 1-.025-.338v-.675q0-.162.025-.337L1.95 9.375l2.75-4.75 2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.612.3.288.175.563.375l2.975-1.25 2.75 4.75-2.575 1.95q.025.176.025.338v.675q0 .162-.05.337l2.575 1.95-2.75 4.75-2.95-1.25a7 7 0 0 1-.575.375q-.3.175-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025A3.37 3.37 0 0 0 15.55 12q0-1.45-1.025-2.475A3.37 3.37 0 0 0 12.05 8.5q-1.474 0-2.488 1.025A3.4 3.4 0 0 0 8.55 12q0 1.45 1.012 2.475Q10.576 15.5 12.05 15.5"
        />
      </Svg>
    );
  }),
);
