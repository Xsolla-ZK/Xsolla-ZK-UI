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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2.062 1a8.01 8.01 0 0 1-6.288 6.83L17.444 13zM12 19.2 8.556 13h6.888zm-1.65.63A8.01 8.01 0 0 1 4.062 13h2.494zM8.556 11 12 4.8l3.444 6.2zm1.794-6.83L6.556 11H4.062a8.01 8.01 0 0 1 6.288-6.83m3.3 0A8.01 8.01 0 0 1 19.938 11h-2.494z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Globe = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
