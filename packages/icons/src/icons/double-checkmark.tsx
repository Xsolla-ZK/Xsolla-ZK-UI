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
        d="m6.7 18-5.65-5.65 1.425-1.4 4.25 4.25 1.4 1.4zm5.65 0L6.7 12.35l1.4-1.425 4.25 4.25 9.2-9.2 1.4 1.425zm0-5.65-1.425-1.4L15.875 6 17.3 7.4z"
      />
    </Svg>
  );
};

export const DoubleCheckmark = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
