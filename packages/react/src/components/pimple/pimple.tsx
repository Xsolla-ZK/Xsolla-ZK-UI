import { withStaticProperties } from '@tamagui/core';
import { PimpleContext, PimpleFrame, PimpleIcon, PimpleText } from './pimple.styled';
import type { PimpleProps } from './pimple.types';

const PimpleComponent = PimpleFrame.styleable<PimpleProps>(
  ({ children, ...propsIn }, ref) => (
    <PimpleContext.Provider componentProps={propsIn}>
      <PimpleFrame {...propsIn} ref={ref}>
        {children}
      </PimpleFrame>
    </PimpleContext.Provider>
  ),
  {
    disableTheme: true,
  },
);

export const Pimple = withStaticProperties(PimpleComponent, {
  Text: PimpleText,
  Icon: PimpleIcon,
});
