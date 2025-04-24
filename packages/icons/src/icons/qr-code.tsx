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
      <Path fill={color} fillRule="evenodd" d="M3 3h8v8H3zm3 3h2v2H6z" clipRule="evenodd" />
      <Path fill={color} d="M13 13h2v2h-2z" />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M17 15h-2v2h-2v2h2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v-2h-2zm0 2h-2v2h2zm0 0v-2h2v2zM21 3h-8v8h8zm-3 3h-2v2h2zM3 13h8v8H3zm3 3h2v2H6z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const QrCode = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
