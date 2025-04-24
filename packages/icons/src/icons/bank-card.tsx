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
      <Path fill={color} d="M2 4h20v3H2z" />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M2 10h20v10H2zm10 3H4v1h8zm-8 2h6v1H4z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const BankCard = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
