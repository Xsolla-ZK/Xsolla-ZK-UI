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
        d="M2 21 3 6h5V2h8v4h5l1 15zm8-17h4v2h-4z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Briefcase = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
