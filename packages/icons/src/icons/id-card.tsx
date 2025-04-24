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
        fillRule="evenodd"
        d="M22 4H2v16h20zM9 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3 1 1 3H5l1-3zm4.5-3L19 9V8h-5v1zM14 12l2.5 1 2.5-1v-1h-5z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const IdCard = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
