import { Stack, styled } from '@tamagui/core';
import { OTP_FIELD_COMPONENT_NAME } from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles } from '../../utils';
import type { FieldSizes } from '../field/field.types';

export const OTPFieldFrame = styled(Stack, {
  name: OTP_FIELD_COMPONENT_NAME,

  display: 'flex',
  flexDirection: 'row',

  variants: {
    size: (val: FieldSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.field[val as keyof typeof config.field];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.inputs);
    },
  } as const,
});
