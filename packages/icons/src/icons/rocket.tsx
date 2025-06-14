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
        d="m8.639 8.917 1.42-1.42a11.94 11.94 0 0 1 9.857-3.413 11.94 11.94 0 0 1-3.412 9.856l-1.421 1.421zm8.055 0a1.611 1.611 0 1 1-3.222 0 1.611 1.611 0 0 1 3.222 0"
        clipRule="evenodd"
      />
      <Path
        fill={color}
        d="M4.984 8.532a3.05 3.05 0 0 1 3.729.46l6.296 6.295c.99.99 1.18 2.528.459 3.729L14.278 21 3 9.723zM9.306 17.916l.138-.138-3.222-3.222-.138.138a7.78 7.78 0 0 0-2.279 5.5c2.064 0 4.042-.82 5.5-2.278"
      />
    </Svg>
  );
};

export const Rocket = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
