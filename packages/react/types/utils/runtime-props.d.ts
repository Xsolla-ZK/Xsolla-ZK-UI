import type { StackProps, TextProps } from '@tamagui/core';
export declare function runtimeProps<IsText extends boolean>(props: IsText extends true ? TextProps : StackProps): IsText extends true ? TextProps : StackProps;
//# sourceMappingURL=runtime-props.d.ts.map