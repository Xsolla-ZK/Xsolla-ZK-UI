import { Stack, styled } from '@tamagui/core';
import { getComponentsConfig, getMappedStyles } from '../../utils';
import type { MarkdownVariant } from './markdown.types';

export const MarkdownFrame = styled(Stack, {
  variants: {
    variant: (val: MarkdownVariant) => {
      const config = getComponentsConfig();
      const componentProps = config.markdown[val as keyof typeof config.markdown];

      if (!componentProps) {
        return {};
      }
      return getMappedStyles(componentProps);
    },
  } as const,
});
