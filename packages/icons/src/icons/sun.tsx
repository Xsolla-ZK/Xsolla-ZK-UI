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
        d="M11.5 5 11 1h2l-.5 4zM11 23l.5-4h1l.5 4zM19 12.5l4 .5v-2l-4 .5zM1 11l4 .5v1L1 13zM19.071 20.485l1.414-1.414-3.182-2.475-.707.707zM7.404 6.697l-.707.707-3.182-2.475 1.414-1.414zM20.485 4.929l-1.414-1.414-2.475 3.182.707.707zM6.697 16.596l.707.707-2.475 3.182-1.414-1.414zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
      />
    </Svg>
  );
};

export const Sun = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
