import type { CreateTamaguiProps } from '@tamagui/core';

type FontOverrides<T> = {
  [K in keyof T]?: {
    family: string;
  };
} & {
  all?: {
    family: string;
  };
};

export function createCustomFont<T extends CreateTamaguiProps['fonts']>(
  fonts: T,
  overrides: FontOverrides<T>,
) {
  if (!fonts) return {} as T;

  return Object.keys(fonts).reduce((acc, curr) => {
    const font = fonts[curr];
    const override = overrides[curr as keyof T] || overrides.all;
    const fontFamily = override?.family;
    acc[curr] = {
      ...font,
      family: [
        fontFamily,
        '-apple-system',
        'system-ui',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ]
        .filter(Boolean)
        .join(','),
    };
    return acc;
  }, {} as NonNullable<T>);
}
