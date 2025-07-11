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
        d="m6 9 1-7h10l1 7h2v12H4V9zm8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0M9 9h6V4H9z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Lock = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
