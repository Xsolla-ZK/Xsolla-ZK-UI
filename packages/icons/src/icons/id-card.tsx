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
        d="M14 13h5v-2h-5zm0-3h5V8h-5zm-9 6h8v-.55q0-1.125-1.1-1.787Q10.8 13 9 13t-2.9.662Q5 14.326 5 15.45zm4-4q.825 0 1.412-.588Q11 10.826 11 10t-.588-1.412A1.93 1.93 0 0 0 9 8q-.825 0-1.412.588A1.93 1.93 0 0 0 7 10q0 .825.588 1.412Q8.175 12 9 12m-5 8q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h16q.824 0 1.413.588Q22 5.175 22 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20z"
      />
    </Svg>
  );
};

export const IdCard = memo<IconProps>(themed(Icon));
