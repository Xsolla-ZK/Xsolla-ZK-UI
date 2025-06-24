import { createStyledContext, Stack, styled, Text } from '@tamagui/core';
import { PIMPLE_COMPONENT_NAME } from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles, createIconComponent } from '../../utils';
import type { PimpleContextType, PimpleSizes } from './pimple.types';

export const PimpleContext = createStyledContext<PimpleContextType>({
  size: '$500',
});

export const PimpleFrame = styled(Stack, {
  name: PIMPLE_COMPONENT_NAME,
  context: PimpleContext,

  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$background',
  userSelect: 'none',

  variants: {
    size: (val: PimpleSizes) => {
      const config = getComponentsConfig();
      const pimple = config.pimple[val as keyof typeof config.pimple];

      if (!pimple) {
        return {};
      }
      return getMappedStyles(pimple.frame);
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
      const pimple = config.pimple[val as keyof typeof config.pimple];
      if (!pimple) {
        return {};
      }
      return getMappedStyles(pimple.label);
    },
  },
});

export const PimpleIcon = createIconComponent(PIMPLE_COMPONENT_NAME, PimpleContext, 'pimple');
