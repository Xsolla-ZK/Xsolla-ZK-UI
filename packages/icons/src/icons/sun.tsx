import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path
        fill="currentColor"
        d="M11.5 5 11 1h2l-.5 4zM11 23l.5-4h1l.5 4zM19 12.5l4 .5v-2l-4 .5zM1 11l4 .5v1L1 13zM19.071 20.485l1.414-1.414-3.182-2.475-.707.707zM7.404 6.697l-.707.707-3.182-2.475 1.414-1.414zM20.485 4.929l-1.414-1.414-2.475 3.182.707.707zM6.697 16.596l.707.707-2.475 3.182-1.414-1.414zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
      />
    </SvgThemed>
  );
};

export const Sun = memo(Icon);
