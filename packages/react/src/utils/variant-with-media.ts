/* eslint-disable @typescript-eslint/no-explicit-any */
import { isPlainObject, getMediaKeys } from '@xsolla-zk/ui-utils';
import { getComponentsConfig } from './components-config';
import type { VariantSpreadFunction } from '@tamagui/core';

// Cache of processed values for memoization
const variantsWithMediaCache = new WeakMap<object, Record<string, unknown>>();

/**
 * Нормализует props для определенного медиа-ключа, используя логику "последнего валидного значения"
 */
function normalizePropsForMediaKey(
  props: Record<string, unknown>,
  targetMediaKey: string,
): Record<string, unknown> {
  const { validKeys } = getMediaKeys();
  const normalized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(props)) {
    if (isPlainObject(value)) {
      // Значение имеет медиа-формат { base: ..., $md: ... }
      let lastValidValue = Object.prototype.hasOwnProperty.call(value, 'base')
        ? value.base
        : undefined;

      if (targetMediaKey === 'base') {
        normalized[key] = lastValidValue;
      } else {
        // Проходим по всем медиа-ключам до целевого
        for (const mediaKey of validKeys) {
          const mediaVal = mediaKey in value ? value[mediaKey] : undefined;
          if (mediaVal !== undefined) {
            lastValidValue = mediaVal;
          }

          // Если дошли до целевого ключа, используем текущее значение
          if (mediaKey === targetMediaKey) {
            normalized[key] = lastValidValue;
            break;
          }
        }
      }
    } else {
      // Простое значение - используем как есть
      normalized[key] = value;
    }
  }

  return normalized;
}

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
export function variantWithMedia<Props extends Record<string, unknown>, Value = any>(
  processValue: VariantSpreadFunction<Props, Value>,
): VariantSpreadFunction<Props, Value> {
  return (val, extras) => {
    if (!isPlainObject(val)) {
      // Simple value - process directly in O(1)
      return processValue(val, extras);
    }

    // Check cache for objects
    const mediaObject = val as { [key: string]: Value };
    const cachedResult = variantsWithMediaCache.get(mediaObject);
    if (cachedResult) {
      return cachedResult as ReturnType<VariantSpreadFunction<Props, Value>>;
    }

    // Object with media keys - process in O(n)
    const result: Record<string, unknown> = {};
    const keys = Object.keys(mediaObject);

    for (const key of keys) {
      // Нормализуем props для текущего медиа-ключа
      const normalizedProps = normalizePropsForMediaKey(extras.props, key);

      const processExtras = {
        ...extras,
        props: normalizedProps as Props,
      };

      const processedValue = processValue(mediaObject[key], processExtras);

      if (key === 'base') {
        // For base key, merge styles directly into the root result
        Object.assign(result, processedValue);
      } else {
        // For media keys, create a nested structure
        result[key] = processedValue;
      }
    }

    // Cache the result for reuse
    variantsWithMediaCache.set(mediaObject, result);

    return result as ReturnType<VariantSpreadFunction<Props, Value>>;
  };
}

/**
 * Создает функцию варианта для простых случаев без сложных union типов
 * Используйте эту функцию когда TypeScript жалуется на "union type too complex to represent"
 */
export function createSimpleVariant<Value, Config = ReturnType<typeof getComponentsConfig>>(
  processValue: (value: Value, config: Config) => Record<string, unknown>,
) {
  return (val: Value | Record<string, Value>) => {
    const config = getComponentsConfig() as Config;

    if (!isPlainObject(val)) {
      // Простое значение - обрабатываем напрямую
      return processValue(val, config);
    }

    // Объект с медиа-ключами
    const mediaObject = val;
    const result: Record<string, unknown> = {};

    Object.keys(mediaObject).forEach((key) => {
      const processedValue = processValue(mediaObject[key], config);

      if (key === 'base') {
        // Для базового ключа объединяем стили напрямую в корень результата
        Object.assign(result, processedValue);
      } else {
        // Для медиа-ключей создаем вложенную структуру
        result[key] = processedValue;
      }
    });

    return result;
  };
}

/*
Пример использования:

для компонента вызываются такие пропсы:
{
  size: {
    base: 100,
    $md: 200,
    $lg: 300,
  },
  tone: {
    base: 'brand',
    $lg: 'neutral',
  },
  variant: {
    base: 'primary',
    $md: 'secondary',
  },
}

const Component = styled(Text, {
  variants: {
    size: variantWithMedia((val: 100 | 200 | 300, { props }) => ({
      padding: val
    })),
    variant: (val: 'secondary' | 'primary', { props }) => ({
      // props.tone теперь будет содержать правильное значение для текущего медиа-ключа
      // 'brand' для base и $md, 'neutral' для $lg
      color: val === 'secondary' ? props.tone : 'black',
    }),
    tone: variantWithMedia((val: 'brand' | 'neutral', { props }) => ({})),
  } as const
});

в результате должны получить:
{
  "padding": 100,
  "color": "black",
  "$md": {
    "padding": 200,
    "color": "brand"
  },
  "$lg": {
    "padding": 300,
    "color": "neutral"
  }
}
*/
