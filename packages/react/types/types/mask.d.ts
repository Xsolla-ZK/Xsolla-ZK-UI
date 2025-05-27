import type { CountryCode } from 'libphonenumber-js';
export type MaskObject = {
    prefix?: string;
    lockPrefix?: boolean;
    includePrefixInRawValue?: boolean;
} & ({
    type: 'phone';
    region?: CountryCode;
} | {
    type: 'date';
    options?: Intl.DateTimeFormatOptions;
} | {
    type: 'time';
    options?: Intl.DateTimeFormatOptions;
} | {
    type: 'number';
    options?: Intl.NumberFormatOptions;
} | {
    type: 'currency';
    options: Omit<Intl.NumberFormatOptions, 'style'>;
} | {
    type: 'custom';
    format: string;
});
export type MaskType = string | MaskObject;
//# sourceMappingURL=mask.d.ts.map