import type { MaskType } from '../../types';
import type { InputProps } from '../input/input.types';
/**
 * MaskedInput - component for input with mask
 *
 * Supports the following mask types:
 * 1. String mask: 'AAA-9999', where:
 *    - 9 - only numbers
 *    - A - only letters
 *    - S - letters and numbers
 *
 * 2. Object with mask type:
 *    - { type: 'date', format: 'DD/MM/YYYY' }
 *    - { type: 'time', format: 'HH:mm' }
 *    - { type: 'phone' }
 *    - { type: 'currency', options: Intl.NumberFormatOptions }
 *    - { type: 'custom', format: '999-AAA' }
 *
 * 3. Object with immutable prefix:
 *    - { prefix: '+7', type: 'phone' }
 *    - { prefix: 'ID-', type: 'custom', format: '999-AAA' }
 *
 * @example
 * ```tsx
 * // Phone with prefix +7
 * <MaskedInput
 *   placeholder="Phone"
 *   mask={{ prefix: '+7', type: 'phone' }}
 *   onChangeText={(maskedValue, rawValue) => {
 *     console.log(maskedValue, rawValue);
 *   }}
 * />
 *
 * // Custom mask
 * <MaskedInput
 *   placeholder="Product code"
 *   mask="AAA-9999"
 * />
 * ```
 */
export interface MaskedInputProps extends Omit<InputProps, 'mask' | 'onChangeText'> {
    /**
     * Mask for input
     *
     * 1. String mask: 'AAA-9999', where:
     *    - 9 - only numbers
     *    - A - only letters
     *    - S - letters and numbers
     *
     * 2. Object with mask type:
     *    - { type: 'date', format: 'DD/MM/YYYY' }
     *    - { type: 'time', format: 'HH:mm' }
     *    - { type: 'phone' }
     *    - { type: 'currency', options: Intl.NumberFormatOptions }
     *    - { type: 'custom', format: '999-AAA' }
     *
     * 3. Object with immutable prefix:
     *    - { prefix: '+7', type: 'phone' }
     *    - { prefix: 'ID-', type: 'custom', format: '999-AAA' }
     */
    mask: MaskType;
    /**
     * Callback function when value is changed
     * @param maskedValue - value with applied mask
     * @param rawValue - value without mask
     */
    onChangeText?: (maskedValue: string, rawValue: string) => void;
}
//# sourceMappingURL=masked-input.types.d.ts.map