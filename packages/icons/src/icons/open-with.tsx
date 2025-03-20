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
        d="m12 22-4.25-4.25 1.425-1.425L11 18.15V14h2v4.125l1.8-1.825 1.45 1.45zm-5.75-5.75L2 12l4.225-4.225L7.65 9.2 5.85 11H10v2H5.875L7.7 14.8zm11.5 0-1.425-1.425L18.15 13H14v-2h4.125L16.3 9.2l1.45-1.45L22 12zM11 10V5.85L9.175 7.675 7.75 6.25 12 2l4.25 4.25-1.425 1.425L13 5.85V10z"
      />
    </Svg>
  );
};

export const OpenWith = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
