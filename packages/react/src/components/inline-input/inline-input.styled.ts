import { styled } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import { getMappedStyles } from '@xsolla-zk/react/utils/get-mapped-styles';
import { TextInput } from 'react-native';
import { inputSharedStyledOptions } from '../input/input.shared';
import { INLINE_INPUT_COMPONENT_NAME } from './inline-input.constants';
import type { InlineInputSizes } from './inline-input.types';

export const InlineInputElement = styled(
  TextInput,
  {
    name: INLINE_INPUT_COMPONENT_NAME,

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
        ':number': () => ({}),
      },
      minRows: {
        ':number': () => ({}),
      },
      size: (val: InlineInputSizes) => {
        const config = getComponentsConfig();
        const componentProps = config.inlineInput[val];

        if (!componentProps) {
          return {};
        }

        return getMappedStyles(componentProps);
      },
      disabled: {
        true: {},
      },
    } as const,
    defaultVariants: {
      size: '$500',
    },
  },
  inputSharedStyledOptions,
);
