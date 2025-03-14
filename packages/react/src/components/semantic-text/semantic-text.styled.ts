import { styled, Text } from '@tamagui/core';
import { getComponentsConfig } from '../../utils/components-config';
import { getTypographyPreset } from '../../utils/get-typography-preset';

export const SemanticTextRoot = styled(
  Text,
  {
    name: 'SemanticText',
    tag: 'span',
    color: '$content.neutral-primary',

    variants: {
      variant: {
        headerXl: () => {
          const config = getComponentsConfig();
          return {
            role: 'heading',
            ...config.semanticText['headerXl'],
            ...getTypographyPreset('display.500.accent'),
          };
        },
        headerL: () => {
          const config = getComponentsConfig();
          return {
            role: 'heading',
            ...config.semanticText['headerL'],
            ...getTypographyPreset('display.450.accent'),
          };
        },
        headerM: () => {
          const config = getComponentsConfig();
          return {
            role: 'heading',
            ...config.semanticText['headerM'],
            ...getTypographyPreset('display.400.accent'),
          };
        },
        headerS: () => {
          const config = getComponentsConfig();
          return {
            role: 'heading',
            ...config.semanticText['headerS'],
            ...getTypographyPreset('display.350.accent'),
          };
        },
        headingXs: () => {
          const config = getComponentsConfig();
          return {
            role: 'heading',
            ...config.semanticText['headerXs'],
            ...getTypographyPreset('compact.300.accent'),
          };
        },
        paragraphL: () => {
          const config = getComponentsConfig();
          return {
            ...config.semanticText['paragraphL'],
            ...getTypographyPreset('text.350.default'),
          };
        },
        paragraphM: () => {
          const config = getComponentsConfig();
          return {
            ...config.semanticText['paragraphM'],
            ...getTypographyPreset('text.300.default'),
          };
        },
        paragraphS: () => {
          const config = getComponentsConfig();
          return {
            ...config.semanticText['paragraphS'],
            ...getTypographyPreset('text.250.default'),
          };
        },
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
