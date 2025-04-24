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
        d="M9.538 7.2a9 9 0 0 0 7.07 7.07 9 9 0 0 0 5.199-.512 9.95 9.95 0 0 1-2.735 5.119c-3.906 3.905-10.237 3.906-14.143 0-3.905-3.905-3.905-10.237 0-14.142A9.94 9.94 0 0 1 10.049 2a9 9 0 0 0-.511 5.2"
      />
    </Svg>
  );
};

export const Moon = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
