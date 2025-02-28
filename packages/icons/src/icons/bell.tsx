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
        d="M4 19v-2h2v-7q0-2.074 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062A1.45 1.45 0 0 1 12 2q.624 0 1.063.438.437.436.437 1.062v.7q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587A1.93 1.93 0 0 1 10 20h4q0 .824-.588 1.413A1.93 1.93 0 0 1 12 22"
      />
    </Svg>
  );
};

export const Bell = memo<IconProps>(themed(Icon));
