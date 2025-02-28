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
        d="M5 3q-.824 0-1.412.587A1.93 1.93 0 0 0 3 5v14q0 .824.587 1.413Q4.176 21 5 21h14q.824 0 1.413-.587Q21 19.825 21 19v-7h-2v7H5V5h7V3zm9 0v2h3.6l-9.3 9.3 1.4 1.4L19 6.425V10h2V3z"
      />
    </Svg>
  );
};

export const ExternalLink = memo<IconProps>(themed(Icon));
