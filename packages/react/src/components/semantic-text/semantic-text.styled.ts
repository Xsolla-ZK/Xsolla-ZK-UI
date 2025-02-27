import { styled, Text } from '@tamagui/core';
import { getTypographyPreset } from '@xsolla-zk-ui/config';

export const SemanticTextRoot = styled(
  Text,
  {
    name: 'SemanticText',
    tag: 'span',
    color: '$content.neutral-primary',

    variants: {
      variant: {
        headingXl: {
          role: 'heading',
          marginTop: '$400',
          marginBottom: '$100',
          ...getTypographyPreset('display.500.accent'),
        },
        headingLg: {
          role: 'heading',
          marginTop: '$350',
          marginBottom: '$100',
          ...getTypographyPreset('display.450.accent'),
        },
        headingMd: {
          role: 'heading',
          marginTop: '$300',
          marginBottom: '$100',
          ...getTypographyPreset('display.400.accent'),
        },
        headingSm: {
          role: 'heading',
          marginTop: '$200',
          marginBottom: '$100',
          ...getTypographyPreset('display.350.accent'),
        },
        headingXs: {
          role: 'heading',
          marginTop: '$200',
          marginBottom: '$100',
          ...getTypographyPreset('compact.300.accent'),
        },
        paragraphLg: {
          marginTop: '$100',
          marginBottom: '$100',
          ...getTypographyPreset('text.350.default'),
        },
        paragraphMd: {
          marginTop: '$100',
          marginBottom: '$100',
          ...getTypographyPreset('text.300.default'),
        },
        paragraphSm: {
          marginTop: '$100',
          marginBottom: '$100',
          ...getTypographyPreset('text.250.default'),
        },
      },
    } as const,
    defaultVariants: {
      variant: 'paragraphMd',
    },
  },
  {
    acceptsClassName: true,
  },
);
