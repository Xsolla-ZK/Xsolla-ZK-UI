import { createTamagui } from '@tamagui/core';
import { initializeComponentsConfig } from './components-config';

function createConfig<
  T extends Parameters<typeof createTamagui>[0],
  C extends Parameters<typeof initializeComponentsConfig>[0],
>(config: T, componentsConfig: C) {
  initializeComponentsConfig(componentsConfig);

  return createTamagui(config);
}
