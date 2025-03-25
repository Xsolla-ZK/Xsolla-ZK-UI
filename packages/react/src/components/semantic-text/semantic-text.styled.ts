import { styled, Text } from '@tamagui/core';
import { getMappedProps } from '@xsolla-zk-ui/react/utils/get-mapped-props';
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

        return getMappedProps(semanticTextProps);
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
