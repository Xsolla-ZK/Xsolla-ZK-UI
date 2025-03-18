import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { createIconComponent } from '@xsolla-zk-ui/react/utils/create-icon-component';
import { getMappedProps } from '@xsolla-zk-ui/react/utils/get-mapped-props';
import type { PimpleContextType, PimpleSizes } from './pimple.types';

const PimpleContext = createStyledContext<PimpleContextType>({
  size: '$500',
});

export const PIMPLE_COMPONENT_NAME = 'Pimple';

export const PimpleFrame = styled(Stack, {
  name: PIMPLE_COMPONENT_NAME,
  context: PimpleContext,

  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$background',

  variants: {
    size: (val: PimpleSizes) => {
      const config = getComponentsConfig();
      const pimple = config.pimple[val];

      if (!pimple) {
        return {};
      }
      return getMappedProps(pimple.frame);
    },
  },
});

export const PimpleText = styled(Text, {
  name: PIMPLE_COMPONENT_NAME,
  context: PimpleContext,
  color: '$color',

  variants: {
    size: (val: PimpleSizes) => {
      const config = getComponentsConfig();
      const pimple = config.pimple[val];
      if (!pimple) {
        return {};
      }
      return getMappedProps(pimple.label);
    },
  },
});

export const PimpleIcon = createIconComponent(PIMPLE_COMPONENT_NAME, PimpleContext, 'pimple');
