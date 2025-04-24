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
        d="M21 3H3v18h18zm-11 9.382 4-2V8h-4v2H8V6h8v5.618l-4 2V15h-2zM10 16v2h2v-2z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Question = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
