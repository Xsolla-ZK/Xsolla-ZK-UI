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
        d="M11.225 10.525q.525 0 .887-.363.363-.362.363-.887t-.363-.888a1.2 1.2 0 0 0-.887-.362q-.525 0-.888.362a1.2 1.2 0 0 0-.362.888q0 .525.362.887.363.363.888.363M20.55 22q-1.05 0-2.825-.875t-3.8-2.375a7.6 7.6 0 0 1-1.95.25q-2.925 0-4.95-2.025T5 12.025q0-.5.075-1t.2-.975Q3.8 8.025 2.912 6.262 2.025 4.5 2.025 3.45q0-.675.375-1.062Q2.775 2 3.425 2t1.687.45 2.863 1.525Q7.45 4.25 7 4.55t-.875.65a10 10 0 0 0-.925-.475q-.45-.2-.95-.425.45.95.962 1.85.513.9 1.088 1.775A6.8 6.8 0 0 1 8.725 5.8q1.475-.775 3.25-.775 2.925 0 4.962 2.037t2.038 4.963q0 1.775-.788 3.25A6.9 6.9 0 0 1 16.05 17.7q.875.575 1.787 1.1.913.525 1.863.95-.199-.475-.413-.925-.212-.45-.487-.925.375-.425.675-.9t.55-.975q1.15 1.95 1.562 2.913T22 20.55q0 .725-.4 1.087-.4.363-1.05.363m-6.825-6.975q.424 0 .712-.287a.97.97 0 0 0 .288-.713.97.97 0 0 0-.288-.713.97.97 0 0 0-.712-.287.97.97 0 0 0-.713.287.97.97 0 0 0-.287.713q0 .424.287.713.288.287.713.287m1.25-3.5a.73.73 0 0 0 .75-.75.73.73 0 0 0-.75-.75.73.73 0 0 0-.75.75.73.73 0 0 0 .75.75"
      />
    </Svg>
  );
};

export const Orbit = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
