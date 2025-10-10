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
        d="M13 23h-2v-4h2zM6.343 16.242l1.415 1.415-2.83 2.828-1.413-1.414zM17.657 16.242l2.828 2.83-1.414 1.413-2.829-2.828zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12M5 13H1v-2h4zM23 13h-4v-2h4zM4.929 3.515l2.829 2.828-1.415 1.415-2.828-2.83zM19.071 3.515l1.414 1.414-2.828 2.829-1.415-1.415zM13 5h-2V1h2z"
      />
    </SvgThemed>
  );
};

export const Sun = memo(Icon);
