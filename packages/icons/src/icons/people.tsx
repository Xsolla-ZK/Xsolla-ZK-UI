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
        d="M12 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6M5 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6M22 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 21l-1-4H3l-1 4zM16 21l-2-11h-4L8 21zM16 21l1-7h4l1 7z"
      />
    </Svg>
  );
};

export const People = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
