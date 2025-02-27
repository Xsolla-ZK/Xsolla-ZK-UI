import { createTamagui } from '@tamagui/core';
import { webConfig } from '@xsolla-zk-ui/config/web';

export const config = createTamagui(webConfig);

export type AppConfig = typeof config;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
  // if you want types for group styling props, define them like so:
  // interface TypeOverride {
  //   groupNames(): 'card'
  // }
}
