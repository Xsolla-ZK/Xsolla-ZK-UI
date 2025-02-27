import { themed } from '@tamagui/helpers-icon';
import { memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import type { IconProps } from '@tamagui/helpers-icon';

export const Documents = memo<IconProps>(
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
          d="M7 20V8.975q0-.825.6-1.4A2 2 0 0 1 9.025 7H20q.824 0 1.413.588Q22 8.175 22 9v8l-5 5H9q-.825 0-1.412-.587A1.93 1.93 0 0 1 7 20M2.025 6.25q-.15-.825.325-1.487t1.3-.813L14.5 2.025q.825-.15 1.488.325.662.475.812 1.3L17.05 5H9Q7.35 5 6.175 6.175T5 9v9.55a2.25 2.25 0 0 1-.687-.6 1.85 1.85 0 0 1-.363-.85zM20 16h-4v4z"
        />
      </Svg>
    );
  }),
);
