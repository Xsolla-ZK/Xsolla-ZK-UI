import { type GetProps, type StyledContext, type TamaguiComponent } from '@tamagui/core';
export declare function withStyledMediaContext<T extends TamaguiComponent, C extends StyledContext & {
    __contextMediaProps: string[];
}>(StyledComponent: T, context: C, contextScope?: string): TamaguiComponent<GetProps<T> extends infer T_1 ? T_1 extends GetProps<T> ? T_1 extends void ? any : Omit<any, keyof T_1> & T_1 : never : never, any, {} & GetProps<T>, {}, {}, {}>;
//# sourceMappingURL=with-styled-media-context.d.ts.map