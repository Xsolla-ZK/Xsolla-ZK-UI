import { createStyledContext, Stack, styled } from '@tamagui/core';
import { Input as InputBase } from '@tamagui/input';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { getMappedStyles } from '@xsolla-zk-ui/react/utils/get-mapped-styles';
import { INPUT_COMPONENT_NAME } from './input.constants';
import type { InputContextType, InputSizes } from './input.types';

export const InputContext = createStyledContext<InputContextType>({
  size: '$500',
  error: false,
});

export const InputFrame = styled(Stack, {
  name: INPUT_COMPONENT_NAME,
  context: InputContext,

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
    size: (val: InputSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.input[val];
      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.frame);
    },
  } as const,
  defaultVariants: {
    size: '$500',
  },
});

const adornmentStyles = {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'inherit',
} as const;

export const StartAdornment = styled(Stack, adornmentStyles);

export const EndAdornment = styled(Stack, adornmentStyles);

export const InputElement = styled(InputBase, {
  name: INPUT_COMPONENT_NAME,
  unstyled: true,

  borderWidth: 0,
  padding: 0,
  outlineWidth: 0,
  backgroundColor: 'transparent',
  color: '$color',

  variants: {
    size: (val: InputSizes) => {
      const config = getComponentsConfig();
      const componentProps = config.input[val];

      if (!componentProps) {
        return {};
      }

      return getMappedStyles(componentProps.label);
    },
  } as const,
});
