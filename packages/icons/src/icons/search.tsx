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
        d="M9 2a7 7 0 1 0 4.273 12.545L19 22l3-3-7.452-5.731a7 7 0 0 0-.598-9.219A7 7 0 0 0 9 2M7.087 4.38a5 5 0 1 1 3.826 9.24 5 5 0 0 1-3.826-9.24"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Search = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
