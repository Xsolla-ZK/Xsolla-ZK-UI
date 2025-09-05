import type { StackProps, TextProps } from '@tamagui/core';

export function runtimeProps<IsText extends boolean>(
  props: IsText extends true ? TextProps : StackProps,
) {
  if (process.env.XSOLLA_ZK_STAGE === 'build') return {};
  return props;
}
