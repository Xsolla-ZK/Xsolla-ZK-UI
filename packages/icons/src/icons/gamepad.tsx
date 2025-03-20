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
        d="M4.55 19q-1.275 0-1.975-.887-.7-.888-.525-2.163l1.05-7.5q.225-1.5 1.337-2.475A3.84 3.84 0 0 1 7.05 5h9.9q1.5 0 2.612.975T20.9 8.45l1.05 7.5q.175 1.274-.525 2.163-.7.887-1.975.887a2.5 2.5 0 0 1-.975-.187 2.6 2.6 0 0 1-.825-.563L15.4 16H8.6l-2.25 2.25q-.375.375-.825.563A2.5 2.5 0 0 1 4.55 19M17 13q.424 0 .712-.287A.97.97 0 0 0 18 12a.97.97 0 0 0-.288-.713A.97.97 0 0 0 17 11a.97.97 0 0 0-.713.287A.97.97 0 0 0 16 12q0 .424.287.713.288.287.713.287m-2-3q.424 0 .712-.287A.97.97 0 0 0 16 9a.97.97 0 0 0-.288-.713A.97.97 0 0 0 15 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 14 9q0 .424.287.713.288.287.713.287m-7.25 3h1.5v-1.75H11v-1.5H9.25V8h-1.5v1.75H6v1.5h1.75z"
      />
    </Svg>
  );
};

export const Gamepad = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
