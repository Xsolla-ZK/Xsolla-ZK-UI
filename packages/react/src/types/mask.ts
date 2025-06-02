export type MaskType = {
  prefix?: string;
  lockPrefix?: boolean;
  includePrefixInRawValue?: boolean;
} & { type: 'custom'; format: string };
// | { type: 'phone' }
// | { type: 'number'; options?: Intl.NumberFormatOptions }
// | { type: 'currency'; options?: Omit<Intl.NumberFormatOptions, 'style'> }
// | { type: 'date'; options?: Intl.DateTimeFormatOptions }
// | { type: 'time'; options?: Intl.DateTimeFormatOptions }
// | {
//     type: 'currency';
//     options: Omit<Intl.NumberFormatOptions, 'style'>;
//   }
