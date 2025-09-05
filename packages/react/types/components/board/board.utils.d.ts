import { type StaticConfigPublic, type VariantDefinitions } from '@tamagui/core';
import { BoardFrame } from './board.styled';
import type { BoardProps } from './board.types';
import type { styled, GetProps } from '@tamagui/core';
export declare const withBoardStyled: <StyledConfig extends StaticConfigPublic, Variants extends VariantDefinitions<typeof BoardFrame, StyledConfig>>(options?: Parameters<typeof styled<typeof BoardFrame, StyledConfig, Variants>>[1], staticConfig?: StyledConfig, scope?: string) => import("@tamagui/core").TamaguiComponent<GetProps<import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, StyledConfig["accept"] extends Record<string, any> ? import("@tamagui/core").StackStyleBase & (StyledConfig["accept"] extends Record<string, any> ? { [Key in keyof StyledConfig["accept"]]?: (Key extends keyof import("@tamagui/core").StackStyleBase ? import("@tamagui/core").StackStyleBase[Key] : never) | (StyledConfig["accept"][Key] extends "style" ? Partial<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
}>> : StyledConfig["accept"][Key] extends "textStyle" ? Partial<import("@tamagui/core").TextProps> : Omit<import("@tamagui/core").ThemeValueGet<StyledConfig["accept"][Key]>, "unset">) | undefined; } : {}) : import("@tamagui/core").StackStyleBase, (Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
} : { [Key_1_1 in "pressable" | "blured" | Exclude<keyof ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined), "_isEmpty">]?: (Key_1_1 extends "pressable" | "blured" ? {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
}[Key_1_1] : undefined) | (Key_1_1 extends keyof ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined) ? ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined)[Key_1_1] : undefined) | undefined; }, StaticConfigPublic & StyledConfig>> & BoardProps extends infer T ? T extends GetProps<import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, StyledConfig["accept"] extends Record<string, any> ? import("@tamagui/core").StackStyleBase & (StyledConfig["accept"] extends Record<string, any> ? { [Key in keyof StyledConfig["accept"]]?: (Key extends keyof import("@tamagui/core").StackStyleBase ? import("@tamagui/core").StackStyleBase[Key] : never) | (StyledConfig["accept"][Key] extends "style" ? Partial<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
}>> : StyledConfig["accept"][Key] extends "textStyle" ? Partial<import("@tamagui/core").TextProps> : Omit<import("@tamagui/core").ThemeValueGet<StyledConfig["accept"][Key]>, "unset">) | undefined; } : {}) : import("@tamagui/core").StackStyleBase, (Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
} : { [Key_1_1 in "pressable" | "blured" | Exclude<keyof ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined), "_isEmpty">]?: (Key_1_1 extends "pressable" | "blured" ? {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
}[Key_1_1] : undefined) | (Key_1_1 extends keyof ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined) ? ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined)[Key_1_1] : undefined) | undefined; }, StaticConfigPublic & StyledConfig>> & BoardProps ? T extends void ? import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, StyledConfig["accept"] extends Record<string, any> ? import("@tamagui/core").StackStyleBase & (StyledConfig["accept"] extends Record<string, any> ? { [Key in keyof StyledConfig["accept"]]?: (Key extends keyof import("@tamagui/core").StackStyleBase ? import("@tamagui/core").StackStyleBase[Key] : never) | (StyledConfig["accept"][Key] extends "style" ? Partial<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
}>> : StyledConfig["accept"][Key] extends "textStyle" ? Partial<import("@tamagui/core").TextProps> : Omit<import("@tamagui/core").ThemeValueGet<StyledConfig["accept"][Key]>, "unset">) | undefined; } : {}) : import("@tamagui/core").StackStyleBase, (Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
} : { [Key_1_1 in "pressable" | "blured" | Exclude<keyof ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined), "_isEmpty">]?: (Key_1_1 extends "pressable" | "blured" ? {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
}[Key_1_1] : undefined) | (Key_1_1 extends keyof ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined) ? ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined)[Key_1_1] : undefined) | undefined; }> : Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, StyledConfig["accept"] extends Record<string, any> ? import("@tamagui/core").StackStyleBase & (StyledConfig["accept"] extends Record<string, any> ? { [Key in keyof StyledConfig["accept"]]?: (Key extends keyof import("@tamagui/core").StackStyleBase ? import("@tamagui/core").StackStyleBase[Key] : never) | (StyledConfig["accept"][Key] extends "style" ? Partial<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
}>> : StyledConfig["accept"][Key] extends "textStyle" ? Partial<import("@tamagui/core").TextProps> : Omit<import("@tamagui/core").ThemeValueGet<StyledConfig["accept"][Key]>, "unset">) | undefined; } : {}) : import("@tamagui/core").StackStyleBase, (Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
} : { [Key_1_1 in "pressable" | "blured" | Exclude<keyof ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined), "_isEmpty">]?: (Key_1_1 extends "pressable" | "blured" ? {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
}[Key_1_1] : undefined) | (Key_1_1 extends keyof ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined) ? ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined)[Key_1_1] : undefined) | undefined; }>, keyof T> & T : never : never, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & GetProps<import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, StyledConfig["accept"] extends Record<string, any> ? import("@tamagui/core").StackStyleBase & (StyledConfig["accept"] extends Record<string, any> ? { [Key in keyof StyledConfig["accept"]]?: (Key extends keyof import("@tamagui/core").StackStyleBase ? import("@tamagui/core").StackStyleBase[Key] : never) | (StyledConfig["accept"][Key] extends "style" ? Partial<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
}>> : StyledConfig["accept"][Key] extends "textStyle" ? Partial<import("@tamagui/core").TextProps> : Omit<import("@tamagui/core").ThemeValueGet<StyledConfig["accept"][Key]>, "unset">) | undefined; } : {}) : import("@tamagui/core").StackStyleBase, (Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
} : { [Key_1_1 in "pressable" | "blured" | Exclude<keyof ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined), "_isEmpty">]?: (Key_1_1 extends "pressable" | "blured" ? {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
}[Key_1_1] : undefined) | (Key_1_1 extends keyof ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined) ? ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined)[Key_1_1] : undefined) | undefined; }, StaticConfigPublic & StyledConfig>> & BoardProps, StyledConfig["accept"] extends Record<string, any> ? import("@tamagui/core").StackStyleBase & (StyledConfig["accept"] extends Record<string, any> ? { [Key in keyof StyledConfig["accept"]]?: (Key extends keyof import("@tamagui/core").StackStyleBase ? import("@tamagui/core").StackStyleBase[Key] : never) | (StyledConfig["accept"][Key] extends "style" ? Partial<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
}>> : StyledConfig["accept"][Key] extends "textStyle" ? Partial<import("@tamagui/core").TextProps> : Omit<import("@tamagui/core").ThemeValueGet<StyledConfig["accept"][Key]>, "unset">) | undefined; } : {}) : import("@tamagui/core").StackStyleBase, (Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
} : { [Key_1_1 in "pressable" | "blured" | Exclude<keyof ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined), "_isEmpty">]?: (Key_1_1 extends "pressable" | "blured" ? {
    pressable?: boolean | undefined;
    blured?: boolean | undefined;
}[Key_1_1] : undefined) | (Key_1_1 extends keyof ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined) ? ((Required<Variants> extends {
    _isEmpty: 1;
} ? true : false) extends true ? {} : Variants extends Object ? { [Key_1 in keyof Variants]?: (Variants[Key_1] extends import("@tamagui/core").VariantSpreadFunction<any, infer Val> ? Val : import("@tamagui/core").GetVariantValues<keyof Variants[Key_1]>) | undefined; } : undefined)[Key_1_1] : undefined) | undefined; }, StaticConfigPublic & StyledConfig>;
//# sourceMappingURL=board.utils.d.ts.map