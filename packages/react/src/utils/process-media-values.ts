import { isPlainObject, objectDiff, shallowEqual, getMediaKeys } from '@xsolla-zk/ui-utils';
import { getComponentsConfig } from './components-config';
import type { ValidAllPropsWithExtra } from './valid-props';
import type { ExtractValues, MediaUnion, MediaValue, Prettify, ReturnTypeConfig } from '../types';
import type { ComponentsConfig } from './components-config';
import type { WithThemeShorthandsPseudosMedia } from '@tamagui/core';

type Result = WithThemeShorthandsPseudosMedia<ValidAllPropsWithExtra>;

type CallbackMapProps<T, K extends keyof T> = Prettify<ExtractValues<Omit<T, K>>>;

type CallbackMap<T> = {
  [K in keyof T]?: (
    value: T[K] extends MediaValue<infer U> ? U : T[K],
    extras: {
      props: CallbackMapProps<T, K>;
      config: ReturnTypeConfig<ComponentsConfig>;
      breakpoint: MediaUnion;
    },
  ) => Record<string, unknown>;
};

type ProcessCallback<T> = (
  values: { [K in keyof T]: T[K] extends MediaValue<infer U> ? U : T[K] },
  config: ReturnTypeConfig<ComponentsConfig>,
) => Record<string, unknown>;

export function processMediaValues<T extends Record<string, MediaValue<string | number | boolean>>>(
  input: T,
  processCallback: ProcessCallback<T>,
): Result;

export function processMediaValues<T extends Record<string, MediaValue<string | number | boolean>>>(
  input: T,
  processCallback: CallbackMap<T>,
): Result;

export function processMediaValues<T extends Record<string, MediaValue<string | number | boolean>>>(
  input: T,
  processCallback: ProcessCallback<T> | CallbackMap<T>,
): Result {
  const config = getComponentsConfig();
  const { validKeys } = getMediaKeys();

  const baseNormalized: Partial<T> = {};
  const overrides: Record<string, Partial<T>> = {};
  const safeNormalized: Record<string, Partial<T>> = {};

  for (const [key, value] of Object.entries(input)) {
    if (isPlainObject(value)) {
      const mediaObject = value;

      if ('base' in mediaObject) {
        baseNormalized[key as keyof T] = mediaObject.base as T[keyof T];
      }

      for (const [mediaKey, mediaVal] of Object.entries(mediaObject)) {
        if (mediaKey === 'base') continue;
        if (validKeys.has(mediaKey)) {
          (overrides[mediaKey] ??= {})[key as keyof T] = mediaVal as T[keyof T];
        }
      }
    } else {
      baseNormalized[key as keyof T] = value as T[keyof T];
    }

    let lastValidValue = isPlainObject(value) ? value.base : value;
    for (const mediaKey of validKeys) {
      const val = value[mediaKey as keyof typeof value];
      (safeNormalized[mediaKey] ??= {})[key as keyof T] = (val ?? lastValidValue) as T[keyof T];

      if (val) {
        lastValidValue = val;
      }
    }
  }

  if (isPlainObject(processCallback)) {
    const baseResult: Record<string, unknown> = {};
    const mediaResult: Record<string, Record<string, unknown>> = {};
    Object.keys(processCallback).forEach((key) => {
      let prevCallbackResult = null;
      const currentCallback = processCallback[key] ?? (() => {});
      const currentValue = baseNormalized[key];
      if (currentValue) {
        const callbackResult = currentCallback(currentValue as never, {
          props: baseNormalized as unknown as CallbackMapProps<T, string>,
          config,
          breakpoint: 'base',
        });
        Object.assign(
          baseResult,
          isPlainObject(callbackResult) ? callbackResult : { [key]: callbackResult },
        );
        prevCallbackResult = callbackResult;
      }

      for (const mediaKey in overrides) {
        const val = safeNormalized[mediaKey][key];
        const callbackResult = val
          ? currentCallback(val as never, {
              props: safeNormalized[mediaKey] as unknown as CallbackMapProps<T, string>,
              config,
              breakpoint: mediaKey as MediaUnion,
            })
          : undefined;

        if (!shallowEqual(prevCallbackResult, callbackResult)) {
          if (isPlainObject(callbackResult)) {
            const prevResult = isPlainObject(prevCallbackResult) ? prevCallbackResult : {};
            mediaResult[mediaKey] = mediaResult[mediaKey]
              ? { ...mediaResult[mediaKey], ...objectDiff(prevResult, callbackResult) }
              : objectDiff(prevResult, callbackResult);
          } else {
            mediaResult[mediaKey] ??= {};
            mediaResult[mediaKey][key] = callbackResult;
          }
        }
        prevCallbackResult = callbackResult;
      }
    });

    return Object.assign(baseResult, mediaResult) as Result;
  }

  const result = processCallback(baseNormalized as never, config);

  for (const [mediaKey, override] of Object.entries(overrides)) {
    result[mediaKey] = processCallback(override as never, config);
  }

  return result as Result;
}
