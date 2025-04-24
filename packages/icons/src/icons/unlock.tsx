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
        d="m6 7 1-5h10l1 7h2v12H4V9h11V4H9v3zm8 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Unlock = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
