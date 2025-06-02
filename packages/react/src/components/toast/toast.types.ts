import type { ComponentsConfig } from '../../utils';

export type ToastSizes = keyof ComponentsConfig['toast'] | (string & {});
