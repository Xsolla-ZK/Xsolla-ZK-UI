import { Stack } from '@tamagui/core';
import { FIELD_COMPONENT_NAME } from '@xsolla-zk/constants';
import {
  createStyledMediaContext,
  getComponentsConfig,
  getMappedStyles,
  smartContextStyled,
} from '../../utils';
import { Label } from '../label/label';
import { Typography } from '../typography/typography';
import type { FieldContextType, FieldSizes } from './field.types';

export const FieldContext = createStyledMediaContext(
  {
    size: '$500',
    error: false,
  } as FieldContextType,
  ['size'],
);

export const FieldFrame = smartContextStyled(Stack, {
  name: FIELD_COMPONENT_NAME,
  // context: FieldContext,

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

export const FieldRow = smartContextStyled(Stack, {
  name: FIELD_COMPONENT_NAME,
  // context: FieldContext,

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

export const FieldLabel = smartContextStyled(Label, {
  name: FIELD_COMPONENT_NAME,
  context: FieldContext,
  color: '$color',

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
      return getMappedStyles(componentProps.label);
    },
  } as const,
});

export const FieldLabelValue = smartContextStyled(Typography, {
  name: FIELD_COMPONENT_NAME,
  context: FieldContext,

  color: '$color',

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

export const FieldHint = smartContextStyled(Typography, {
  name: FIELD_COMPONENT_NAME,
  context: FieldContext,

  color: '$color',

  variants: {
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

export const FieldHintValue = smartContextStyled(Typography, {
  name: FIELD_COMPONENT_NAME,
  context: FieldContext,

  userSelect: 'none',
  color: '$color',

  variants: {
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
