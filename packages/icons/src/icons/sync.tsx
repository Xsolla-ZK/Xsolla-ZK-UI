import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const Sync = memo<IconProps>(
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
          d="M4 20v-2h2.75l-.4-.35q-1.225-1.225-1.787-2.662A8 8 0 0 1 4 12.05q0-2.775 1.662-4.938Q7.326 4.95 10 4.25v2.1a5.93 5.93 0 0 0-2.9 2.213A5.9 5.9 0 0 0 6 12.05q0 1.126.425 2.188T7.75 16.2l.25.25V14h2v6zm10-.25v-2.1a5.93 5.93 0 0 0 2.9-2.212A5.9 5.9 0 0 0 18 11.95q0-1.126-.425-2.187Q17.15 8.7 16.25 7.8L16 7.55V10h-2V4h6v2h-2.75l.4.35q1.225 1.225 1.788 2.662Q20 10.45 20 11.95q0 2.775-1.663 4.938Q16.676 19.05 14 19.75"
        />
      </Svg>
    );
  }),
);
