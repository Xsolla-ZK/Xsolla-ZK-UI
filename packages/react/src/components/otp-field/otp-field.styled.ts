import { Stack, styled } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import { getMappedStyles } from '@xsolla-zk/react/utils/get-mapped-styles';
import type { FieldSizes } from '../field/field.types';

export const OTPFieldFrame = styled(Stack, {
  name: 'OTPField',

  display: 'flex',
  flexDirection: 'row',

  variants: {
    size: (val: FieldSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.field[val];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.inputs);
    },
  } as const,
});
