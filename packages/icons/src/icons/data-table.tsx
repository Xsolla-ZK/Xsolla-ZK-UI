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
        d="M22 22H2V2h20zM8 20h2v-2H8zm8 0h2v-2h-2zM4 16h2v-2H4zm4 0h2v-2H8zm4 0h2v-2h-2zm-8-4h2v-2H4zm8 0h2v-2h-2zm4 0h4v-2h-4zM4 8h2V6H4zm4 0h2V6H8zm8 0h4V6h-4z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const DataTable = memo(Icon);
