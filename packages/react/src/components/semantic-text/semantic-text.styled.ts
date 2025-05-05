import { styled, Text } from '@tamagui/core';
import { getMappedStyles } from '@xsolla-zk/react/utils/get-mapped-styles';
import { getComponentsConfig } from '../../utils/components-config';
import type { SemanticTextVariants } from './semantic-text.types';

export const SemanticTextRoot = styled(
  Text,
  {
    name: 'SemanticText',
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
