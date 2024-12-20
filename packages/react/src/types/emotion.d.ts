/* eslint-disable @typescript-eslint/no-empty-object-type */
import '@emotion/react';
import type { XZKUITheme } from './theme';

declare module '@emotion/react' {
  export interface Theme extends XZKUITheme {}
}
