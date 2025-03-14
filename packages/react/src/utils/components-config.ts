import { components } from '@xsolla-zk-ui/config';

export const defaultComponentsConfig = components;

type DefaultComponentsConfig = typeof defaultComponentsConfig;

export interface ComponentsCustomConfig {}

export interface ComponentsConfig
  extends Omit<DefaultComponentsConfig, keyof ComponentsCustomConfig>,
    ComponentsCustomConfig {}

let currentComponentConfig = defaultComponentsConfig;

type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

type TokenShape<T, K extends keyof T> = T[K][keyof T[K]];

type InitialConfig<T> = {
  [K in keyof T]?: {
    [P in keyof T[K]]?: DeepPartial<T[K][P]>;
  } & {
    [key: string]: Partial<TokenShape<T, K>>;
  };
};

type MergeConfig<T extends InitialConfig<DefaultComponentsConfig>> = {
  [K in keyof DefaultComponentsConfig]: DefaultComponentsConfig[K] & T[K];
};

export function initializeComponentsConfig<T extends InitialConfig<DefaultComponentsConfig>>(
  userConfig: T,
) {
  const mergedConfig = (
    Object.entries(defaultComponentsConfig) as Array<
      [keyof DefaultComponentsConfig, DefaultComponentsConfig[keyof DefaultComponentsConfig]]
    >
  ).reduce((acc, [key, value]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    acc[key] = { ...value, ...userConfig[key] };
    return acc;
  }, {} as MergeConfig<T>);

  currentComponentConfig = mergedConfig;
}

// const cfg = initializeComponentsConfig({
//   button: {
//     $200: {
//       icon: {
//         size: '',
//       },
//     },
//   },
//   controlTokens: {
//     $300: {
//       'min-size': 32,
//     },
//   },
// });

// type CFG = typeof cfg;
// type ButtonTokens = CFG['buttonTokens'];
// type asfasf = ButtonTokens['$1000'];

// declare module '@xsolla-zk-ui/react' {
//   interface ComponentCustomConfig extends CFG {}
// }

export function getComponentsConfig<T extends ComponentsConfig>() {
  return currentComponentConfig as T;
}
