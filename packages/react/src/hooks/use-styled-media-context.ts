import { useMemo } from 'react';
import { processMediaValues } from '../utils';
import type { StyledContext, WithMediaProps } from '@tamagui/core';

type ContextProps<T> = T extends StyledContext<infer SC> & {
  __contextMediaProps: string[];
}
  ? SC
  : never;

type ContextMediaProps<T> = T extends StyledContext<infer SC> & {
  __contextMediaProps: Array<infer Keys>;
}
  ? {
      [K in Extract<Keys, keyof SC>]: SC[K];
    }
  : never;

type ContextOtherProps<T> = T extends StyledContext<infer SC> & {
  __contextMediaProps: Array<infer Keys>;
}
  ? {
      [K in Exclude<keyof SC, Keys>]: SC[K];
    }
  : never;

type ResultMediaProps<T extends object> = T & WithMediaProps<T>;

export function useStyledMediaContext<T extends StyledContext & { __contextMediaProps: string[] }>(
  context: T,
  scope?: string,
) {
  const ctx = context.useStyledContext(scope) as ContextProps<T>;

  const result = useMemo(() => {
    const mediaPropsSet = new Set(context.__contextMediaProps);

    const media = {} as ContextMediaProps<T>;
    const other = {} as ContextOtherProps<T>;

    for (const [key, value] of Object.entries(ctx)) {
      if (mediaPropsSet.has(key)) {
        // @ts-ignore: ok
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        media[key] = value;
      } else {
        // @ts-ignore: ok
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        other[key] = value;
      }
    }

    return {
      mediaContext: processMediaValues(media, (values) => values) as ResultMediaProps<
        ContextMediaProps<T>
      >,
      ...other,
    };
  }, [ctx]); // eslint-disable-line react-hooks/exhaustive-deps

  return result;
}
