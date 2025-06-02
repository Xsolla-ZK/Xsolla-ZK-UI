import type { MaskType } from '../types/mask';

const nonWordRegex = /\W/g;
const nonWordOrUnderscoreRegex = /[^\w]/g;
const digitRegex = /\d/;
const letterRegex = /[a-zA-Z]/;
const alphanumericRegex = /[a-zA-Z0-9]/;

// Cache Intl.NumberFormat formatters
const formatterCache = new Map<string, Intl.NumberFormat>();
function getFormatter(locale: string, options: Intl.NumberFormatOptions = {}): Intl.NumberFormat {
  const key = `${locale}|${JSON.stringify(options)}`;
  let fmt = formatterCache.get(key);
  if (!fmt) {
    fmt = new Intl.NumberFormat(locale, options);
    formatterCache.set(key, fmt);
  }
  return fmt;
}

/**
 * Mask text by simple pattern:
 * 9 → digit, A → letter, S → letter or digit
 */
export function maskText(text: string, mask: string): string {
  if (!mask) return text;
  if (!text) return '';

  const clean = text.replace(nonWordRegex, '');
  let result = '';
  let textIndex = 0;

  for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
    const maskChar = mask[maskIndex];

    if (textIndex >= clean.length) break;

    const textChar = clean[textIndex];

    if (maskChar === '9') {
      if (digitRegex.test(textChar)) {
        result += textChar;
        textIndex++;
      } else {
        // Skip non-digit characters
        textIndex++;
        maskIndex--; // Stay at the same mask position
      }
    } else if (maskChar === 'A') {
      if (letterRegex.test(textChar)) {
        result += textChar;
        textIndex++;
      } else {
        // Skip non-letter characters
        textIndex++;
        maskIndex--; // Stay at the same mask position
      }
    } else if (maskChar === 'S') {
      if (alphanumericRegex.test(textChar)) {
        result += textChar;
        textIndex++;
      } else {
        // Skip non-alphanumeric characters
        textIndex++;
        maskIndex--; // Stay at the same mask position
      }
    } else {
      // Static character in mask - insert it
      result += maskChar;
      // Don't advance textIndex as this is a separator
    }
  }

  return result;
}

/** Remove all non-alphanumeric characters */
export function unMaskText(text: string): string {
  return text ? text.replace(nonWordOrUnderscoreRegex, '') : '';
}

/**
 * Build mask pattern from formatToParts
 */
function buildMaskPattern(fmt: Intl.NumberFormat, value: number): string {
  return fmt
    .formatToParts(value)
    .map((part) => (part.type === 'integer' ? '9'.repeat(part.value.length) : part.value))
    .join('');
}

/**
 * Apply custom mask (string or object with format),
 * or format through Intl (number/currency).
 */
export function applyMask(
  raw: string,
  maskOrType: MaskType,
  locale: string = Intl.DateTimeFormat().resolvedOptions().locale,
): string {
  // Handle string mask
  if (typeof maskOrType === 'string') {
    return maskText(raw, maskOrType);
  }

  const { prefix = '', lockPrefix = true } = maskOrType;

  let textToMask = raw;

  // If we have a prefix and lockPrefix is enabled
  if (prefix && lockPrefix) {
    // If input doesn't start with prefix, remove any existing prefix-like text and add correct prefix
    if (!raw.startsWith(prefix)) {
      // Remove any non-word characters from the beginning that might be partial prefix
      textToMask = raw.replace(/^[^\w]*/, '');
      textToMask = prefix + textToMask;
    }
  }

  if ('format' in maskOrType && maskOrType.format) {
    // For custom format, only apply mask to the non-prefix part
    if (prefix && lockPrefix) {
      const withoutPrefix = textToMask.slice(prefix.length);
      const maskedCore = maskText(withoutPrefix, maskOrType.format);
      return prefix + maskedCore;
    } else {
      const core = maskText(textToMask, maskOrType.format);
      return prefix + core;
    }
  }

  // if (maskOrType.type === 'phone') {
  //   // Simple phone mask - just digits with common formatting
  //   const digitsOnly = textToMask.replace(/\D/g, '');
  //   let formatted = digitsOnly;

  //   if (digitsOnly.length > 0) {
  //     // Format as (XXX) XXX-XXXX for US-style or similar pattern
  //     if (digitsOnly.length <= 3) {
  //       formatted = `(${digitsOnly}`;
  //     } else if (digitsOnly.length <= 6) {
  //       formatted = `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
  //     } else {
  //       formatted = `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 10)}`;
  //     }
  //   }

  //   return prefix + formatted;
  // }

  // if (maskOrType.type === 'number' || maskOrType.type === 'currency') {
  //   const val = Number(textToMask.replace(/[^\d.-]/g, '')) || 0;
  //   const fmtOpts: Intl.NumberFormatOptions = {
  //     style: maskOrType.type === 'currency' ? 'currency' : 'decimal',
  //     currency: maskOrType.type === 'currency' ? 'USD' : undefined,
  //     ...maskOrType.options,
  //   };
  //   const fmt = getFormatter(locale, fmtOpts);
  //   const formatted = fmt.format(val);
  //   return prefix + formatted;
  // }

  // fallback — add prefix to raw value
  return textToMask;
}
