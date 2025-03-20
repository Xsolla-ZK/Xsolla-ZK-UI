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
        d="M12.1 22q-2.1 0-3.937-.8a10.3 10.3 0 0 1-3.2-2.162 10.3 10.3 0 0 1-2.163-3.2A9.8 9.8 0 0 1 2 11.9q0-3.65 2.325-6.437T10.25 2a10.1 10.1 0 0 0 .275 4.838 9.87 9.87 0 0 0 2.5 4.137 9.87 9.87 0 0 0 4.138 2.5A10.1 10.1 0 0 0 22 13.75q-.65 3.6-3.45 5.925T12.1 22"
      />
    </Svg>
  );
};

export const Moon = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
