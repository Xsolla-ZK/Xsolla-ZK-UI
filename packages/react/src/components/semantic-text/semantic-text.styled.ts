import { styled, Text } from '@tamagui/core';
import { SEMANTIC_TEXT_COMPONENT_NAME } from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles } from '../../utils';
import type { SemanticTextVariants } from './semantic-text.types';
import type { VariantSpreadExtras } from '@tamagui/core';

export const SemanticTextRoot = styled(Text, {
  name: SEMANTIC_TEXT_COMPONENT_NAME,
  tag: 'span',
  display: 'block',
  color: '$color',

  variants: {
    typographyOnly: (_val: boolean) => ({}),
    variant: (val: SemanticTextVariants, extras) => {
      const { props } = extras as VariantSpreadExtras<{ typographyOnly?: boolean }>;
      const config = getComponentsConfig();
      const semanticTextProps = config.semanticText[val];
      if (!semanticTextProps) {
        return {};
      }

      if (props.typographyOnly) {
        const { typography } = semanticTextProps;
        return getMappedStyles({ typography });
      }

      return getMappedStyles(semanticTextProps);
    },
  } as const,
  defaultVariants: {
    variant: 'paragraphM',
  },
});
