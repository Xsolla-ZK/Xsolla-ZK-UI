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
        d="M12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m-2.9-2.55 1.2-2.75a4.7 4.7 0 0 1-1.812-1.162A5.7 5.7 0 0 1 7.3 13.7l-2.75 1.15q.575 1.6 1.775 2.8t2.775 1.8M7.3 10.3q.425-1.05 1.188-1.838A4.7 4.7 0 0 1 10.3 7.3L9.15 4.55q-1.6.6-2.8 1.8t-1.8 2.8zM12 15q1.25 0 2.125-.875A2.9 2.9 0 0 0 15 12q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 9q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 12q0 1.25.875 2.125A2.9 2.9 0 0 0 12 15m2.9 4.45a7.8 7.8 0 0 0 2.763-1.787A7.8 7.8 0 0 0 19.45 14.9l-2.75-1.2q-.375 1.05-1.15 1.813a5.6 5.6 0 0 1-1.8 1.187zm1.8-9.2 2.75-1.15a7.8 7.8 0 0 0-1.787-2.762A7.8 7.8 0 0 0 14.9 4.55l-1.15 2.8q1.025.375 1.775 1.138T16.7 10.25"
      />
    </Svg>
  );
};

export const Lifebuoy = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
