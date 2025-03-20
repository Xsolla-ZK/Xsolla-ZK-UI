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
        d="M1 21 12 2l11 19zm11-3q.424 0 .713-.288A.97.97 0 0 0 13 17a.97.97 0 0 0-.287-.712A.97.97 0 0 0 12 16a.97.97 0 0 0-.713.288A.97.97 0 0 0 11 17q0 .424.287.712.288.288.713.288m-1-3h2v-5h-2z"
      />
    </Svg>
  );
};

export const Warning = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
