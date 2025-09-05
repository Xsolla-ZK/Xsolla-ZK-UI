import { px } from '@tamagui/core';
type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type PxValue = ReturnType<typeof px>;
type ReturnValue<T extends Record<string, unknown>, C extends Array<keyof T>> = C extends [] ? T : C extends never[] ? T : Prettify<{
    [K in keyof T]: K extends C[number] ? T[K] extends Record<string, unknown> ? {
        [KeyVal in keyof T[K]]: T[K][KeyVal] extends number ? PxValue : T[K][KeyVal];
    } : T[K] : T[K];
}>;
/**
 * Wraps numerical values of tokens in px units for specified categories.
 *
 * This utility became necessary after changes in "@tamagui/web"
 * where the function shouldTokenCategoryHaveUnits() was introduced in "createTamagui.ts".
 * Now only predefined categories of tokens ('size', 'space', 'radius')
 * automatically get px units, while custom categories remain without units.
 *
 * This function allows you to explicitly control which token categories should
 * be wrapped in px, providing flexibility in managing units for different types of tokens.
 *
 * @param tokens - Object with tokens, where each property represents a token category
 * @param categories - Array of keys of categories that should be wrapped in px
 * @returns Object with tokens wrapped in px values for specified categories
 *
 * @example
 * ```ts
 * const tokens = {
 *   customSize: { small: 8, medium: 16 },
 *   size: { $100: 100, $200: 200 },
 *   opacity: { light: 0.5, dark: 0.8 }
 * };
 *
 * const wrappedTokens = wrapTokensWithPx(tokens, ['customSize']);
 * // Result: { customSize: { small: px(8), medium: px(16) }, size: { $100: 100, $200: 200 }, opacity: { light: 0.5, dark: 0.8 } }
 * ```
 */
export declare function wrapTokensWithPx<T extends Record<string, unknown>, C extends Array<keyof T> = []>(tokens: T, categories?: C): ReturnValue<T, C>;
export {};
//# sourceMappingURL=wrap-tokens-with-px.d.ts.map