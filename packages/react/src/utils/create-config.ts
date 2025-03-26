import { createTamagui } from '@tamagui/core';
import { initializeComponentsConfig } from './components-config';

export function createConfig<
  T extends Parameters<typeof createTamagui>[0],
  C extends Parameters<typeof initializeComponentsConfig>[0],
>(config: T, componentsConfig: C) {
  return {
    tamaguiConfig: createTamagui(config),
    componentsConfig: initializeComponentsConfig(componentsConfig),
  };
}
