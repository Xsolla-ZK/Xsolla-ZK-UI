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
        d="M9.2 8.25 11.85 3h.3l2.65 5.25zm2.05 11.85L2.625 9.75h8.625zm1.5 0V9.75h8.625zm3.7-11.85L13.85 3H19l2.625 5.25zm-14.075 0L5 3h5.15l-2.6 5.25z"
      />
    </Svg>
  );
};

export const Diamond = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
