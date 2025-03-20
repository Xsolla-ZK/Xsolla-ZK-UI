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
        d="m19.8 22.6-3.025-3.025a8.3 8.3 0 0 1-1.325.688q-.7.287-1.45.462v-2.05q.35-.125.688-.25.336-.124.637-.3L12 14.8V20l-5-5H3V9h3.2L1.4 4.2l1.4-1.4 18.4 18.4zm-.2-5.8-1.45-1.45a6.8 6.8 0 0 0 .638-1.625q.212-.85.212-1.75 0-2.35-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.137T21 11.975q0 1.325-.363 2.55A8.8 8.8 0 0 1 19.6 16.8m-3.35-3.35L14 11.2V7.95a4.15 4.15 0 0 1 1.838 1.65q.662 1.1.662 2.4a4.3 4.3 0 0 1-.25 1.45M12 9.2 9.4 6.6 12 4z"
      />
    </Svg>
  );
};

export const VolumeSlash = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
