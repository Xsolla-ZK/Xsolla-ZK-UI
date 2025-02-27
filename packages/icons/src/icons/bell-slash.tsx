import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const BellSlash = memo<IconProps>(
  themed((props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        {...otherProps}
      >
        <Path
          fill={color}
          d="M4 19v-2h2v-7q0-.825.213-1.625A6 6 0 0 1 6.85 6.85L10 10H7.2L1.4 4.2l1.4-1.4 18.4 18.4-1.4 1.4-3.65-3.6zm14-3.85-9.8-9.8q.5-.4 1.075-.7T10.5 4.2v-.7q0-.625.438-1.062A1.45 1.45 0 0 1 12 2q.624 0 1.063.438.437.436.437 1.062v.7q2 .5 3.25 2.113T18 10zM12 22q-.825 0-1.412-.587A1.93 1.93 0 0 1 10 20h4q0 .824-.588 1.413A1.93 1.93 0 0 1 12 22"
        />
      </Svg>
    );
  }),
);
