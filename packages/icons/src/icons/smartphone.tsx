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
        d="M18 2H6v20h12zm-6 16 1.414 1.414L12 20.828l-1.414-1.414zm4-14H8v13h8z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Smartphone = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
