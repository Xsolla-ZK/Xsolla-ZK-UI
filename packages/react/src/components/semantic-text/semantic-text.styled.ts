import { styled, Text } from '@tamagui/core';
import { SEMANTIC_TEXT_COMPONENT_NAME } from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles } from '../../utils';
import type { SemanticTextVariants } from './semantic-text.types';

export const SemanticTextRoot = styled(
  Text,
  {
    name: SEMANTIC_TEXT_COMPONENT_NAME,
    tag: 'span',
    display: 'block',
    color: '$color',

    variants: {
      variant: (val: SemanticTextVariants) => {
        const config = getComponentsConfig();
        const semanticTextProps = config.semanticText[val];
        if (!semanticTextProps) {
          return {};
        }

        return getMappedStyles(semanticTextProps);
      },
    } as const,
    defaultVariants: {
      variant: 'paragraphM',
    },
  },
  {
    acceptsClassName: true,
  },
);
