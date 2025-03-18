import { components, deepMerge } from '@xsolla-zk-ui/config';
import type { ValidProps } from './valid-props';

export const defaultComponentsConfig = components;

type DefaultComponentsConfig = typeof defaultComponentsConfig;

export interface ComponentsCustomConfig {}

export interface ComponentsConfig
  extends Omit<DefaultComponentsConfig, keyof ComponentsCustomConfig>,
    ComponentsCustomConfig {}

let currentComponentConfig = defaultComponentsConfig;

type InitialConfig<T> = {
  [K in keyof T]?: T[K] extends object
    ? InitialConfig<T[K]>
    : K extends keyof ValidProps
      ? ValidProps[K]
      : never;
};

type ReturnTypeConfig<T> = {
  [K in keyof T]: T[K] extends object
    ? ReturnTypeConfig<T[K]>
    : K extends keyof ValidProps
      ? ValidProps[K]
      : never;
};

type MergeConfig<T extends InitialConfig<DefaultComponentsConfig>> = {
  [K in keyof DefaultComponentsConfig]: DefaultComponentsConfig[K] & T[K];
};

export function initializeComponentsConfig<T extends InitialConfig<DefaultComponentsConfig>>(
  userConfig: T,
) {
  const mergedConfig = deepMerge(defaultComponentsConfig, userConfig) as MergeConfig<T>;
  // const mergedConfig = (
  //   Object.entries(defaultComponentsConfig) as Array<
  //     [keyof DefaultComponentsConfig, DefaultComponentsConfig[keyof DefaultComponentsConfig]]
  //   >
  // ).reduce((acc, [key, value]) => {
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   acc[key] = { ...value, ...userConfig[key] };
  //   return acc;
  // }, {} as MergeConfig<T>);

  currentComponentConfig = mergedConfig;
}

export function getComponentsConfig<T extends ReturnTypeConfig<ComponentsConfig>>() {
  return currentComponentConfig as T;
}
