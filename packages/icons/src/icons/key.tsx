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
        fillRule="evenodd"
        d="M12.659 14a6 6 0 1 1 0-4H22v4h-2v4h-4v-4zm-8.487-2L7 9.172 9.828 12 7 14.828z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Key = memo(Icon);
