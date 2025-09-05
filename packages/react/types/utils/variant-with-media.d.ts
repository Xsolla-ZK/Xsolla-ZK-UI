import { getComponentsConfig } from './components-config';
import type { VariantSpreadFunction } from '@tamagui/core';
/**
 * Creates a VariantSpreadFunction for processing values with media keys
 * Optimized for maximum performance:
 * - O(1) for simple values
 * - O(1) for cached objects
 * - O(n) for new objects with media keys, where n is the number of keys
 *
 * @param processValue - Callback function for processing each value
 * @returns VariantSpreadFunction for use in styled components
 */
export declare function variantWithMedia<Props extends Record<string, unknown>, Value = any>(processValue: VariantSpreadFunction<Props, Value>): VariantSpreadFunction<Props, Value>;
/**
 * Создает функцию варианта для простых случаев без сложных union типов
 * Используйте эту функцию когда TypeScript жалуется на "union type too complex to represent"
 */
export declare function createSimpleVariant<Value, Config = ReturnType<typeof getComponentsConfig>>(processValue: (value: Value, config: Config) => Record<string, unknown>): (val: Value | Record<string, Value>) => Record<string, unknown>;
//# sourceMappingURL=variant-with-media.d.ts.map