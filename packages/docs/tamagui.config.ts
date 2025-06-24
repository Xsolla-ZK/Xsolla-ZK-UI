import { webConfig } from '@xsolla-zk/config/web';
import { createTamagui } from '@xsolla-zk/react';

export const config = createTamagui(webConfig);

export type AppConfig = typeof config;

declare module '@xsolla-zk/react' {
  interface TamaguiCustomConfig extends AppConfig {}
}
