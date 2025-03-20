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
        d="m19.8 22.6-4.2-4.15q-.874.274-1.762.413Q12.95 19 12 19q-3.775 0-6.725-2.087T1 11.5q.525-1.325 1.325-2.463A11.5 11.5 0 0 1 4.15 7L1.4 4.2l1.4-1.4 18.4 18.4zM12 16a5 5 0 0 0 .512-.025q.238-.025.513-.1l-5.4-5.4q-.075.274-.1.513-.025.237-.025.512 0 1.875 1.313 3.188Q10.125 16 12 16m7.3.45-3.175-3.15q.175-.424.275-.863.1-.437.1-.937 0-1.875-1.312-3.188Q13.875 7 12 7a4.2 4.2 0 0 0-.937.1 4.2 4.2 0 0 0-.863.3L7.65 4.85A11.1 11.1 0 0 1 12 4q3.775 0 6.725 2.087T23 11.5a11.7 11.7 0 0 1-1.512 2.738A11 11 0 0 1 19.3 16.45m-4.625-4.6-3-3a2.3 2.3 0 0 1 1.287.112q.588.238 1.013.688t.613 1.037.087 1.163"
      />
    </Svg>
  );
};

export const EyeSlash = memo<IconProps>(themed(Icon, { defaultStrokeWidth: 0 }));
