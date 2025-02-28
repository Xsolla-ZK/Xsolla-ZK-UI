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
        d="M7 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 20q0-.824.588-1.413A1.93 1.93 0 0 1 7 18q.824 0 1.412.587Q9 19.176 9 20q0 .824-.588 1.413A1.93 1.93 0 0 1 7 22m10 0q-.825 0-1.412-.587A1.93 1.93 0 0 1 15 20q0-.824.588-1.413A1.93 1.93 0 0 1 17 18q.824 0 1.413.587Q19 19.176 19 20q0 .824-.587 1.413A1.93 1.93 0 0 1 17 22M5.2 4h14.75q.575 0 .875.513.3.512.025 1.037l-3.55 6.4q-.275.5-.738.775A1.95 1.95 0 0 1 15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1V2h3.25z"
      />
    </Svg>
  );
};

export const ShoppingCart = memo<IconProps>(themed(Icon));
