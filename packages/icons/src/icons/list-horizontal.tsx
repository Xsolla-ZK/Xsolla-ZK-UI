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
        d="M5 19q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 17V7q0-.824.587-1.412A1.93 1.93 0 0 1 5 5h1.325q.825 0 1.412.588.588.587.588 1.412v10q0 .824-.587 1.413A1.93 1.93 0 0 1 6.325 19zm6.325 0q-.825 0-1.412-.587A1.93 1.93 0 0 1 9.325 17V7q0-.824.588-1.412A1.93 1.93 0 0 1 11.325 5h1.325q.824 0 1.412.588.588.587.588 1.412v10q0 .824-.588 1.413A1.93 1.93 0 0 1 12.65 19zm6.325 0q-.825 0-1.412-.587A1.93 1.93 0 0 1 15.65 17V7q0-.824.588-1.412A1.93 1.93 0 0 1 17.65 5h1.325q.825 0 1.412.588.588.587.588 1.412v10q0 .824-.588 1.413a1.93 1.93 0 0 1-1.412.587z"
      />
    </Svg>
  );
};

export const ListHorizontal = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
