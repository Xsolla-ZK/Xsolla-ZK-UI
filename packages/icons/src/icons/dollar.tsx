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
        d="M7.181 13.069q.432.43 1.069.431h6v3h-7.5v3h3.75V21h3v-1.5h2.25q.637 0 1.069-.431.43-.432.431-1.069v-6q0-.637-.431-1.069a1.45 1.45 0 0 0-1.069-.431h-6v-3h7.5v-3H13.5V3h-3v1.5H8.25q-.637 0-1.069.431A1.45 1.45 0 0 0 6.75 6v6q0 .637.431 1.069"
      />
    </Svg>
  );
};

export const Dollar = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
