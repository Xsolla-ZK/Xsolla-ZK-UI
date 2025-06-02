import type { MaskType } from '../types/mask';
/**
 * Mask text by simple pattern:
 * 9 → digit, A → letter, S → letter or digit
 */
export declare function maskText(text: string, mask: string): string;
/** Remove all non-alphanumeric characters */
export declare function unMaskText(text: string): string;
/**
 * Apply custom mask (string or object with format),
 * or format through Intl (number/currency).
 */
export declare function applyMask(raw: string, maskOrType: MaskType, locale?: string): string;
//# sourceMappingURL=mask-utils.d.ts.map