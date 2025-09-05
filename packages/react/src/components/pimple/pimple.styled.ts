import { Stack, Text } from '@tamagui/core';
import { PIMPLE_COMPONENT_NAME } from '@xsolla-zk/constants';
import { useMemo } from 'react';
import {
  createIconComponent,
  createStyledMediaContext,
  getComponentsConfig,
  getMappedStyles,
  processMediaValues,
  smartContextStyled,
} from '../../utils';
import type { PimpleContextType, PimpleSizes } from './pimple.types';
import type { XORIconProps } from '../../types';
import type { IconProps } from '@xsolla-zk/ui-primitives';

export const PimpleContext = createStyledMediaContext(
  {
    size: '$500',
  } as PimpleContextType,
  ['size'],
);

export const PimpleFrame = smartContextStyled(Stack, {
  name: PIMPLE_COMPONENT_NAME,

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
  } as const,
  defaultVariants: {
    size: '$500',
  },
});

export const PimpleText = smartContextStyled(Text, {
  name: PIMPLE_COMPONENT_NAME,
  context: PimpleContext,
  color: '$color',

  variants: {
    size: (val: PimpleSizes) => {
      const componentsConfig = getComponentsConfig();
      const pimple = componentsConfig.pimple[val as keyof typeof componentsConfig.pimple];
      if (!pimple) {
        return {};
      }
      return {
        display: val === '$200' ? 'none' : 'flex',
        ...getMappedStyles(pimple.label),
      };
    },
  } as const,
});

export const PimpleIcon = (props: XORIconProps) => {
  const ctx = PimpleContext.useStyledContext();

  const iconProps = useMemo(
    () =>
      processMediaValues(
        { size: ctx.size },
        {
          size: (val, { config }) => {
            const componentProps = config.pimple[val as keyof typeof config.pimple];

            if (!componentProps) {
              return {};
            }

            return {
              display: val === '$200' ? 'none' : 'flex',
              size: componentProps.icon.size,
            };
          },
        },
      ) as IconProps,
    [ctx.size],
  );

  return createIconComponent({ ...iconProps, color: '$color', ...props });
};
