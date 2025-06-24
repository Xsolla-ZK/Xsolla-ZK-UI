import { type ForwardedRef, type ReactNode } from 'react';
import type { GetProps, TamaguiComponent, TamaguiElement } from '@tamagui/core';
type RenderFunction<T extends TamaguiComponent> = (Root: T, props: GetProps<T>, ref: ForwardedRef<TamaguiElement>) => ReactNode;
type OverridesProps<S = object> = {
    [K in keyof Omit<S, 'Props'> | 'Root']?: TamaguiComponent;
};
type OverrideRootType<OP extends OverridesProps, T extends TamaguiComponent> = OP['Root'] extends TamaguiComponent ? OP['Root'] : T;
declare function CreateComponent<T extends TamaguiComponent, S>(Root: T, staticProps: S, render: RenderFunction<T>): {
    (): import("react").ForwardRefExoticComponent<((GetProps<T> extends infer T_1 ? T_1 extends GetProps<T> ? T_1 extends void ? any : Omit<any, keyof T_1> & T_1 : never : never) extends infer T_2 ? T_2 extends (GetProps<T> extends infer T_3 ? T_3 extends GetProps<T> ? T_3 extends void ? any : Omit<any, keyof T_3> & T_3 : never : never) ? T_2 extends import("@tamagui/web").TamaDefer ? import("@tamagui/web").GetFinalProps<{} & GetProps<T>, {}, {}> : T_2 : never : never) & import("react").RefAttributes<any>> & import("@tamagui/web").StaticComponentObject<GetProps<T> extends infer T_4 ? T_4 extends GetProps<T> ? T_4 extends void ? any : Omit<any, keyof T_4> & T_4 : never : never, any, {} & GetProps<T>, {}, {}, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
        __tama: [GetProps<T> extends infer T_5 ? T_5 extends GetProps<T> ? T_5 extends void ? any : Omit<any, keyof T_5> & T_5 : never : never, any, {} & GetProps<T>, {}, {}, {}];
    } & S;
    overrides<OP extends OverridesProps<S>>(overridesProps: OP, overridesRender?: RenderFunction<OverrideRootType<OP, T>>): import("react").ForwardRefExoticComponent<((GetProps<OverrideRootType<OP, T>> extends infer T_1 ? T_1 extends GetProps<OverrideRootType<OP, T>> ? T_1 extends void ? any : Omit<any, keyof T_1> & T_1 : never : never) extends infer T_2 ? T_2 extends (GetProps<OverrideRootType<OP, T>> extends infer T_3 ? T_3 extends GetProps<OverrideRootType<OP, T>> ? T_3 extends void ? any : Omit<any, keyof T_3> & T_3 : never : never) ? T_2 extends import("@tamagui/web").TamaDefer ? import("@tamagui/web").GetFinalProps<{} & GetProps<OverrideRootType<OP, T>>, {}, {}> : T_2 : never : never) & import("react").RefAttributes<any>> & import("@tamagui/web").StaticComponentObject<GetProps<OverrideRootType<OP, T>> extends infer T_4 ? T_4 extends GetProps<OverrideRootType<OP, T>> ? T_4 extends void ? any : Omit<any, keyof T_4> & T_4 : never : never, any, {} & GetProps<OverrideRootType<OP, T>>, {}, {}, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
        __tama: [GetProps<OverrideRootType<OP, T>> extends infer T_5 ? T_5 extends GetProps<OverrideRootType<OP, T>> ? T_5 extends void ? any : Omit<any, keyof T_5> & T_5 : never : never, any, {} & GetProps<OverrideRootType<OP, T>>, {}, {}, {}];
    } & S & Omit<OP, "Root">;
};
export default CreateComponent;
//# sourceMappingURL=component-constructor.d.ts.map