import { type GetProps } from '@tamagui/core';
import type { TamaguiComponent } from '@tamagui/core';
export declare function createInput<T extends TamaguiComponent>(Element: T): TamaguiComponent<GetProps<T> extends infer T_1 ? T_1 extends GetProps<T> ? T_1 extends void ? any : Omit<any, keyof T_1> & T_1 : never : never, any, {} & GetProps<T>, {}, {}, {}>;
//# sourceMappingURL=create-input.d.ts.map