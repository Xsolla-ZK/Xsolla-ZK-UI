/* eslint-disable no-param-reassign */
import { createStyledContext } from '@tamagui/core';
import {
  assignWithHiddenProps,
  isPlainObject,
  shallowEqual,
  getMediaKeys,
} from '@xsolla-zk/ui-utils';
import { useMemo, useRef } from 'react';
import type { ReactNode } from 'react';

function isMediaValue<T>(value: T) {
  if (!isPlainObject(value)) {
    return false;
  }

  const { validKeys } = getMediaKeys();
  const valueKeys = Object.keys(value as Record<string, unknown>);

  // early exit
  for (const key of valueKeys) {
    if (validKeys.has(key)) {
      return true;
    }
  }

  return false;
}

type Dict = Record<string, unknown>;

function processBaseValues(
  input: Dict,
  keys: readonly string[],
  responsiveValues: Record<string, Dict>,
  out: Dict,
  defaultValues?: Dict,
) {
  for (const key of keys) {
    if (key in input) {
      const value = input[key];
      // If the value is already in responsive format ({ base: ..., $md: ... }), don't touch it
      if (isMediaValue(value)) {
        out[key] = value;
        continue;
      }
      // Otherwise, add as base value
      responsiveValues[key].base = value;
    } else if (defaultValues && key in defaultValues) {
      // If the value is not in input, but there is a default value
      const defaultValue = defaultValues[key];
      if (!isMediaValue(defaultValue)) {
        responsiveValues[key].base = defaultValue;
      } else {
        out[key] = defaultValue;
      }
    }
  }
}

function processMediaObjectsOptimized(
  input: Dict,
  keysSet: Set<string>,
  responsiveValues: Record<string, Dict>,
  out: Dict,
) {
  const { mediaKeys } = getMediaKeys();

  for (const bp of mediaKeys) {
    const mediaKey = `$${bp}`;
    const mediaObj = input[mediaKey];

    if (isPlainObject(mediaObj)) {
      const nonResponsiveProps: Dict = {};

      // Use Object.entries() for one pass through the properties
      for (const [prop, value] of Object.entries(mediaObj)) {
        if (keysSet.has(prop)) {
          responsiveValues[prop][mediaKey] = value;
        } else {
          nonResponsiveProps[prop] = value;
        }
      }

      // Add non-responsive properties to the output object
      if (Object.keys(nonResponsiveProps).length > 0) {
        out[mediaKey] = nonResponsiveProps;
      }
    }
  }
}

function filterRawResponsive(input: Dict, keys: string[], defaultValues?: Dict) {
  const out: Dict = {};
  const responsiveValues: Record<string, Dict> = {};

  // Initialize objects for each key from keys
  for (const key of keys) {
    responsiveValues[key] = {};
  }

  // Create Set from keys once for efficient reuse
  const keysSet = new Set(keys);

  // Process base values with default values
  processBaseValues(input, keys, responsiveValues, out, defaultValues);

  // Process media objects with optimized version
  processMediaObjectsOptimized(input, keysSet, responsiveValues, out);

  // Add collected responsive values to the output object
  for (const key of keys) {
    if (Object.keys(responsiveValues[key]).length > 0 && !(key in out)) {
      out[key] = responsiveValues[key];
    }
  }

  return out;
}

function shallowEqFiltered(a: Dict, b: Dict) {
  if (a === b) return true;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;

  const { validKeys } = getMediaKeys();

  for (const k of aKeys) {
    const av = a[k];
    const bv = b[k];

    // Use cached valid keys for checking media objects
    if (validKeys.has(k) && k !== 'base') {
      if (!shallowEqual(av, bv)) return false;
    } else if (av !== bv) {
      return false;
    }
  }

  return true;
}

type ProviderProps<T, P> = {
  componentProps?: P;
  children?: ReactNode;
  scope?: string;
} & Partial<T>;

export function createStyledMediaContext<
  T extends Record<string, unknown>,
  K extends Array<keyof T> = Array<keyof T>,
>(defaultValues: T, keyPropsArr: K, namespace = '') {
  const ctx = createStyledContext(defaultValues, namespace);
  const BaseProvider = ctx.Provider;

  return assignWithHiddenProps(
    ctx,
    {
      contextMediaProps: keyPropsArr,
      Provider: function Provider<P extends Record<string, unknown>>({
        children,
        componentProps,
        ...restProps
      }: ProviderProps<T, P>) {
        const lastRef = useRef<Dict | null>(null);

        const filtered = useMemo(
          () => filterRawResponsive(componentProps ?? {}, keyPropsArr as string[], defaultValues),
          [componentProps],
        );

        const stable = useMemo(() => {
          if (lastRef.current && shallowEqFiltered(lastRef.current, filtered)) {
            return lastRef.current;
          }
          lastRef.current = filtered;
          return filtered;
        }, [filtered]);

        const providerProps = { ...stable, ...restProps } as Partial<T> & {
          children?: ReactNode;
        };

        return <BaseProvider {...providerProps}>{children}</BaseProvider>;
      },
    },
    ['contextMediaProps'] as const,
  );
}
