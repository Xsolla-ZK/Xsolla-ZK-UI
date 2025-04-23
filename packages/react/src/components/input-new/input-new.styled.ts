import {
  createStyledContext,
  getFontFamilyFromNameOrVariable,
  getTokenValue,
  getVariableValue,
  Stack,
  styled,
  Text,
} from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { getMappedStyles } from '@xsolla-zk-ui/react/utils/get-mapped-styles';
import { INPUT_NEW_COMPONENT_NAME } from './input-new.constants';
import type {
  InputNewContextType,
  InputNewSizes,
  InputNewVariantSpreadExtras,
} from './input-new.types';
import type { TamaguiConfig, TextStyle, Token, Variable } from '@tamagui/core';

export { INPUT_NEW_COMPONENT_NAME };

export const InputNewContext = createStyledContext<InputNewContextType>({
  size: '$500',
  error: false,
  disabled: false,
});

export const InputNewFrame = styled(Stack, {
  name: INPUT_NEW_COMPONENT_NAME,
  context: InputNewContext,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  borderColor: '$borderColor',
  backgroundColor: '$background',
  animation: 'state',
  animateOnly: ['border', 'background'],

  variants: {
    focused: {
      true: {
        backgroundColor: '$backgroundFocus',
        borderColor: '$borderColorFocus',
        caretColor: '$borderColorFocus',
      },
    },
    size: (val: InputNewSizes, _extras) => {
      const config = getComponentsConfig();
      const componentProps = config.input[val];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.frame);
    },
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  } as const,

  defaultVariants: {
    size: '$500',
    disabled: false,
  },
});

const adornmentStyles = {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'inherit',
} as const;

export const InputStartSlot = styled(Stack, {
  ...adornmentStyles,
  name: `${INPUT_NEW_COMPONENT_NAME}StartSlot`,
});

export const InputEndSlot = styled(Stack, {
  ...adornmentStyles,
  name: `${INPUT_NEW_COMPONENT_NAME}EndSlot`,
});

export const InputNewElement = styled(
  Text,
  {
    name: INPUT_NEW_COMPONENT_NAME,
    context: InputNewContext,
    tag: 'input',

    alignSelf: 'stretch',
    borderRadius: 0,
    borderWidth: 0,
    padding: 0,
    outlineWidth: 0,
    backgroundColor: 'transparent',
    color: '$color',
    flex: 1,

    variants: {
      rows: {
        ':number': () => ({}),
      },
      maxRows: {
        ':number': () => ({
          height: 'auto',
        }),
      },
      minRows: {
        ':number': () => ({
          height: 'auto',
        }),
      },
      size: (val: InputNewSizes) => {
        const config = getComponentsConfig();
        const componentProps = config.input[val];

        if (!componentProps) {
          return {};
        }

        return getMappedStyles(componentProps.label);
      },
      disabled: {
        true: {},
      },
    } as const,
  },
  {
    isInput: true,
    accept: {
      placeholderTextColor: 'color',
      selectionColor: 'color',
    } as const,

    validStyles: Text.staticConfig.validStyles,
  },
);
