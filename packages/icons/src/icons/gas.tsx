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
        d="M4 21V5q0-.824.588-1.412A1.93 1.93 0 0 1 6 3h6q.825 0 1.412.587Q14 4.176 14 5v7h1q.824 0 1.413.588Q17 13.175 17 14v4.5q0 .424.288.712.287.288.712.288.424 0 .712-.288A.97.97 0 0 0 19 18.5v-7.2q-.225.125-.475.162A3.5 3.5 0 0 1 18 11.5q-1.05 0-1.775-.725T15.5 9q0-.8.438-1.437.437-.638 1.162-.913L15 4.55l1.05-1.05 3.7 3.6q.375.375.563.875T20.5 9v9.5q0 1.05-.725 1.775T18 21t-1.775-.725T15.5 18.5v-5H14V21zm2-11h6V5H6zm12 0q.424 0 .712-.287A.97.97 0 0 0 19 9a.97.97 0 0 0-.288-.713A.97.97 0 0 0 18 8a.97.97 0 0 0-.712.287A.97.97 0 0 0 17 9q0 .424.288.713.287.287.712.287"
      />
    </SvgThemed>
  );
};

export const Gas = memo(Icon);
