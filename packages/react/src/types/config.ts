import type { ValidPropsWithExtra } from '../utils/valid-props';

export type ReturnTypeConfig<T> = {
  [K in keyof T]: T[K] extends object
    ? ReturnTypeConfig<T[K]>
    : K extends keyof ValidPropsWithExtra
      ? ValidPropsWithExtra[K]
      : never;
};
