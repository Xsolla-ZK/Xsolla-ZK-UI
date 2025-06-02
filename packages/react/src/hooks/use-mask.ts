import { useCallback, useMemo, useRef, useState } from 'react';
import { unMaskText } from '../utils/mask-utils';
import { applyMask } from '../utils/mask-utils';
import type { MaskType } from '../types';
import type { ChangeEvent } from 'react';

interface UseMaskProps {
  initialValue?: string;
  mask: MaskType;
  onChange?: (maskedValue: string, rawValue: string) => void;
}

export function useMask({ initialValue = '', mask, onChange }: UseMaskProps) {
  const prefix = mask.prefix ?? '';
  const lockPrefix = mask.lockPrefix ?? true;
  const includePrefixInRawValue = mask.includePrefixInRawValue ?? false;
  const inputRef = useRef<HTMLInputElement>(null);

  const format = useCallback(
    (text: string) => {
      let currentText = text;

      if (prefix) {
        // Prevent prefix removal
        if (lockPrefix && text.length < prefix.length) {
          currentText = prefix;
        }

        // Force prefix if not present
        if (lockPrefix && !text.startsWith(prefix)) {
          currentText = prefix + text.slice(prefix.length);
        }
      }

      const masked = applyMask(currentText, mask);
      let raw = unMaskText(masked);

      // Remove prefix from raw value if it was added during masking
      if (prefix && raw.startsWith(prefix.replace(/[^\w]/g, ''))) {
        raw = raw.slice(prefix.replace(/[^\w]/g, '').length);
      }

      if (includePrefixInRawValue && prefix && lockPrefix) {
        raw = prefix.replace(/[^\w]/g, '') + raw;
      }

      return { masked, raw };
    },
    [mask, prefix, lockPrefix, includePrefixInRawValue],
  );

  const { masked: initialMasked } = useMemo(() => format(initialValue), [initialValue, format]);
  const [value, setValue] = useState(initialMasked);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { masked, raw } = format(e.target.value);
      setValue(masked);
      onChange?.(masked, raw);
    },
    [format, onChange],
  );

  return {
    value,
    inputRef,
    rawValue: useMemo(() => {
      let raw = unMaskText(value);

      // Remove prefix from raw value if it was added during masking
      if (prefix && raw.startsWith(prefix.replace(/[^\w]/g, ''))) {
        raw = raw.slice(prefix.replace(/[^\w]/g, '').length);
      }

      return includePrefixInRawValue && prefix && lockPrefix
        ? prefix.replace(/[^\w]/g, '') + raw
        : raw;
    }, [value, includePrefixInRawValue, prefix, lockPrefix]),
    handleChange,
  };
}
