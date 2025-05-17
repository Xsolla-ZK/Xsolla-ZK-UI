import parsePhoneNumberFromString, {
  getExampleNumber,
  ParseError,
  parsePhoneNumberWithError,
} from 'libphonenumber-js';
import metadata from 'libphonenumber-js/metadata.full';
import { AsYouType } from 'libphonenumber-js/mobile';
import type { MaskType } from '../types/mask';
import type { CountryCode } from 'libphonenumber-js';

const nonWordRegex = /\W/g;
const nonDigitRegex = /\D/g;
const nonWordOrUnderscoreRegex = /[^\w]/g;
const digitRegex = /\d/;
const letterRegex = /[a-zA-Z]/;
const alphanumericRegex = /[a-zA-Z0-9]/;

// Кэш форматтеров Intl
const fmtCache = new Map<string, Intl.NumberFormat>();
function getFormatter(locale: string, opts: Intl.NumberFormatOptions = {}) {
  const key = `${locale}|${JSON.stringify(opts)}`;
  if (!fmtCache.has(key)) {
    fmtCache.set(key, new Intl.NumberFormat(locale, opts));
  }
  return fmtCache.get(key)!;
}

// Кэш экземпляров AsYouType для разных регионов
const asYouTypeCache = new Map<string, AsYouType>();
function getAsYouTypeFormatter(region?: string): AsYouType {
  const key = region || 'default';
  if (!asYouTypeCache.has(key)) {
    asYouTypeCache.set(key, new AsYouType(region as CountryCode));
  }
  return asYouTypeCache.get(key)!;
}

/**
 * Применяет маску к тексту на основе шаблона
 * @param text Исходный текст
 * @param mask Строка маски (9 - цифра, A - буква, S - буква или цифра)
 * @returns Отформатированный текст
 */
export function maskText(text: string, mask: string): string {
  if (!mask || !text) return text || '';
  const clean = text.replace(nonWordRegex, '');
  let res = '';
  let idx = 0;
  for (const m of mask) {
    if (idx >= clean.length) break;
    const c = clean[idx];
    if (m === '9' && digitRegex.test(c)) {
      res += c;
      idx++;
    } else if (m === 'A' && letterRegex.test(c)) {
      res += c;
      idx++;
    } else if (m === 'S' && alphanumericRegex.test(c)) {
      res += c;
      idx++;
    } else if (!['9', 'A', 'S'].includes(m)) {
      res += m;
    } else {
      idx++;
    }
  }
  return res;
}

/**
 * Удаляет все нецифровые символы из текста
 * @param text Текст с маской
 * @returns Текст только из цифр и букв
 */
export function unMaskText(maskedText: string): string {
  return maskedText.replace(nonWordOrUnderscoreRegex, '');
}

/**
 * Извлекает только цифры из текста
 * @param text Исходный текст
 * @returns Строка только из цифр
 */
export function extractDigits(text: string): string {
  return text.replace(nonDigitRegex, '');
}

/**
 * Создает шаблон маски на основе форматтера чисел
 */
function buildPattern(fmt: Intl.NumberFormat, val: number): string {
  return fmt
    .formatToParts(val)
    .map((part) => {
      if (part.type === 'integer' || part.type === 'fraction') {
        return '9'.repeat(part.value.length);
      }
      return part.value;
    })
    .join('');
}

/**
 * Получает маску телефона, регион и валидность на основе введенного номера
 */
export function getPhoneMask(raw: string): {
  mask: string | null;
  region?: string;
  isValid: boolean;
} {
  const formatter = getAsYouTypeFormatter();
  formatter.reset();
  formatter.input(raw);

  const countryCode = formatter.getCallingCode();
  const template = formatter.getTemplate(); // e.g. (xxx) xxx-xxxx

  // Создаем маску из шаблона, заменяя 'x' на '9' (цифры)
  const mask = template?.replace(/x/g, '9') || null;

  // Определяем номер телефона и регион
  const number = formatter.getNumberValue();
  const phone = number ? parsePhoneNumberFromString(number) : undefined;

  return {
    mask,
    region: phone?.country,
    isValid: phone?.isValid() ?? false,
  };
}

/**
 * Создает маску для чисел на основе локализации
 */
function getNumberMaskFromIntl(
  value: number,
  locale: string,
  opts?: Intl.NumberFormatOptions,
): string {
  const formatter = getFormatter(locale, opts);
  return formatter.formatToParts(value).reduce((acc, part) => {
    if (part.type === 'integer' || part.type === 'fraction') {
      return acc + '9'.repeat(part.value.length);
    }
    return acc + part.value;
  }, '');
}

/**
 * Применяет маску к исходному тексту в зависимости от типа маски
 */
export function applyMask(
  raw: string,
  mask: MaskType,
  locale: string = Intl.NumberFormat().resolvedOptions().locale,
): string {
  if (!raw) return '';
  if (typeof mask === 'string') return maskText(raw, mask);

  const prefix = mask.prefix ?? '';

  // Обрабатываем текст с учетом префикса
  let input = raw;
  if (prefix && raw.startsWith(prefix)) {
    input = raw.slice(prefix.length);
  }

  switch (mask.type) {
    case 'custom':
      return prefix + maskText(input, mask.format);

    case 'phone': {
      // Используем форматтер AsYouType для телефонного номера
      const formatter = getAsYouTypeFormatter(mask.region as CountryCode);
      formatter.reset();

      // Обработка входного значения
      const digits = extractDigits(input);

      // Если указан регион и маска для конкретной страны
      if (mask.region) {
        // Форматируем телефон с учетом региона
        const formattedNumber = formatter.input(digits);
        return prefix + formattedNumber;
      }

      // Иначе пытаемся определить формат по введенному номеру
      return prefix + formatter.input(digits);
    }

    case 'number': {
      const num = Number(extractDigits(input)) || 0;
      const formatter = getFormatter(locale, mask.options);
      const formatted = formatter.format(num);
      const pattern = getMaskParts(num, locale, mask.options);
      return prefix + maskText(input, pattern);
    }

    case 'currency': {
      const num = Number(extractDigits(input)) || 0;
      const opts = {
        style: 'currency',
        currency: 'USD',
        ...mask.options,
      } as Intl.NumberFormatOptions;
      const formatter = getFormatter(locale, opts);
      const formatted = formatter.format(num);
      const pattern = getMaskParts(num, locale, opts);
      return prefix + maskText(input, pattern);
    }

    case 'date':
    case 'time': {
      try {
        const date = new Date(input);
        if (isNaN(date.getTime())) return raw;

        const formatter = new Intl.DateTimeFormat(locale, mask.options);
        return prefix + formatter.format(date);
      } catch (e) {
        return raw;
      }
    }

    default:
      return raw;
  }
}

/**
 * Генерирует шаблон маски для числа на основе его отформатированного представления
 */
export function getMaskParts(
  value: number,
  locale: string,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(locale, options).formatToParts(value).reduce((acc, part) => {
    if (part.type === 'integer' || part.type === 'fraction') {
      return acc + '9'.repeat(part.value.length);
    }
    return acc + part.value;
  }, '');
}

/**
 * Определяет регион по номеру телефона
 */
export function getRegionFromPhone(phone: string): string | undefined {
  try {
    const phoneNumber = parsePhoneNumberWithError(phone, {
      defaultCountry: 'US',
    });

    return phoneNumber.country;
  } catch (error) {
    if (error instanceof ParseError) {
      // Not a phone number, non-existent country, etc.
      console.log(error.message);
    } else {
      throw error;
    }
  }
}

/**
 * Создает примерный номер телефона для указанного региона
 */
export function getExamplePhoneNumber(region: CountryCode): string | undefined {
  try {
    // @ts-ignore - типы не совпадают, но функция работает корректно
    const example = getExampleNumber(region, metadata);
    return example?.formatNational();
  } catch (error) {
    console.error('Error getting example phone number:', error);
    return undefined;
  }
}
