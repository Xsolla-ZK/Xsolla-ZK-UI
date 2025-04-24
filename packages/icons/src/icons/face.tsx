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
        d="M9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 19l-3-3h6z"
      />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-15.916-1.167L9 10.076 10 6l1 3 8.908 1.782q.091.596.092 1.218"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Face = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
