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
        d="M19.157 12c1.965 3.278 2.409 6.434.843 8s-4.722 1.122-8-.843C8.722 21.122 5.566 21.566 4 20s-1.122-4.722.843-8C2.878 8.722 2.434 5.566 4 4s4.722-1.122 8 .843c3.278-1.965 6.434-2.409 8-.843s1.122 4.722-.843 8m-1.26 1.844c.289.56.52 1.104.69 1.617.65 1.946.28 2.844-.001 3.125-.28.28-1.18.65-3.125.002a11.5 11.5 0 0 1-1.617-.691A22 22 0 0 0 16 16c.7-.7 1.334-1.424 1.897-2.156M16.772 12a20 20 0 0 1-2.186 2.586A20 20 0 0 1 12 16.772a20 20 0 0 1-2.586-2.186A20 20 0 0 1 7.228 12a20 20 0 0 1 2.186-2.586A20 20 0 0 1 12 7.228a20 20 0 0 1 2.586 2.186A20 20 0 0 1 16.772 12m-2.928-5.897c.56-.289 1.104-.52 1.617-.69 1.946-.65 2.844-.28 3.125.001.28.28.65 1.18.002 3.125a11.5 11.5 0 0 1-.691 1.617A22 22 0 0 0 16 8c-.7-.7-1.424-1.334-2.156-1.897m-3.688 0c-.561-.289-1.104-.52-1.617-.69-1.946-.65-2.844-.28-3.125.001-.28.28-.65 1.18-.002 3.125.171.513.402 1.056.691 1.617A22 22 0 0 1 8 8c.7-.7 1.424-1.334 2.156-1.897m-4.053 7.741c-.289.56-.52 1.104-.691 1.617-.649 1.946-.278 2.844.002 3.125.28.28 1.179.65 3.125.002a11.5 11.5 0 0 0 1.617-.691A22 22 0 0 1 8 16c-.7-.7-1.334-1.424-1.897-2.156"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const Orbit = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
