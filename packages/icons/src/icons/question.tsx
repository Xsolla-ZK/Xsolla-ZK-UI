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
        d="M23 23H1V1h22zm-12.563-5h2.56v-2.528h-2.56zm1.615-11.36c-1.136 0-2.08.288-2.832.88-.752.576-1.2 1.488-1.312 2.736h2.384c.128-1.104.785-1.568 1.809-1.568 1.04 0 1.631.432 1.631 1.248V10c0 .368-.112.656-.32.896s-.592.528-1.168.864c-1.312.768-1.727 1.136-1.727 2.175v.257h2.431c.048-.496.224-.704.928-1.104 1.632-.928 2.225-1.648 2.225-3.296v-.128c0-1.696-1.36-3.024-3.953-3.024z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Question = memo(Icon);
