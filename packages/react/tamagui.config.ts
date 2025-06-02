import { createTamagui } from '@tamagui/core';
import { webConfig } from '@xsolla-zk/config/web';

export const config = createTamagui(webConfig);

export type AppConfig = typeof config;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}
