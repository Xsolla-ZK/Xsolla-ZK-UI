import { createStyledContext, Stack, styled } from '@tamagui/core';
import { getComponentsConfig, getMappedStyles } from '../../utils';
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
      const componentProps = config.field[val as keyof typeof config.field];
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
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    size: (val: FieldSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.field[val as keyof typeof config.field];
      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.row);
    },
  } as const,
});

export const FieldLabel = styled(Label, {
  variants: {
    size: (val: FieldSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.field[val as keyof typeof config.field];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.label);
    },
  } as const,
});

export const FieldLabelValue = styled(Typography, {
  context: FieldContext,
  variants: {
    size: (val: FieldSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.field[val as keyof typeof config.field];
      if (!componentProps) {
        return {};
      }
      return {
        ...getMappedStyles(componentProps.label),
        fontWeight: 'numeric',
      };
    },
  } as const,
});

export const FieldHint = styled(Typography, {
  context: FieldContext,
  variants: {
    error: {
      true: {
        color: '$content.negative-primary',
      },
      false: {
        color: '$content.neutral-secondary',
      },
    },
    size: (val: FieldSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.field[val as keyof typeof config.field];
      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps.hint);
    },
  } as const,
});

export const FieldHintValue = styled(Typography, {
  context: FieldContext,

  userSelect: 'none',

  variants: {
    error: {
      true: {
        color: '$content.negative-primary',
      },
      false: {
        color: '$content.neutral-secondary',
      },
    },
    size: (val: FieldSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.field[val as keyof typeof config.field];
      if (!componentProps) {
        return {};
      }
      return {
        ...getMappedStyles(componentProps.hint),
        fontWeight: 'numeric',
      };
    },
  } as const,
});
