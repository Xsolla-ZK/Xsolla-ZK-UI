import { createStyledContext, Stack, styled } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { getMappedStyles } from '@xsolla-zk-ui/react/utils/get-mapped-styles';
import { Label } from '../label/label';
import { Typography } from '../typography/typography';
import { FIELD_COMPONENT_NAME } from './field.constants';
import type { FieldContextType, FieldSizes } from './field.types';

export const FieldContext = createStyledContext<FieldContextType>({
  size: '$500',
  error: false,
});

export const FieldFrame = styled(Stack, {
  name: FIELD_COMPONENT_NAME,
  context: FieldContext,

  display: 'flex',
  flexDirection: 'column',

  variants: {
    error: {
      true: {},
      false: {},
    },
    size: (val: FieldSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.field[val];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.frame);
    },
  } as const,
  defaultVariants: {
    size: '$500',
    error: false,
  },
});

export const FieldRow = styled(Stack, {
  name: FIELD_COMPONENT_NAME,
  context: FieldContext,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    size: (val: FieldSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.field[val];
      if (!componentProps) {
        return {};
      }
      const { typography, ...rest } = componentProps.label;

      return getMappedStyles(rest);
    },
  } as const,
});

// const Row = styled('div')(
//   ({ theme }) => `
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap: ${theme.common.spacing[200]};
//     padding: 0 ${theme.common.spacing[350]};
//     color: ${theme.theme.content.neutralSecondary};

//     &.${xzkuiFieldClasses.error} {
//       color: ${theme.theme.border.negativePrimary};
//     }
//   `,
// );

export const FieldLabel = styled(Label, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    htmlFor: (_, extras) => {
      const { props } = extras;
      return {
        htmlFor: props.id,
      };
    },
    size: (val: FieldSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.field[val];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.label);
    },
  } as const,
});

export const FieldLabelValue = styled(Typography, {
  variants: {
    size: (val: FieldSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.field[val];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.label);
    },
  } as const,
});

export const FieldHint = styled(Typography, {
  variants: {
    size: (val: FieldSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.field[val];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.hint);
    },
  } as const,
});

export const FieldHintValue = styled(Typography, {
  context: FieldContext,

  variants: {
    size: (val: FieldSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.field[val];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.hint);
    },
  } as const,
});

export const FieldError = styled(FieldHint, {
  backgroundColor: 'red',
});

export const FieldErrorValue = FieldHintValue;
