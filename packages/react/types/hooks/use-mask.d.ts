import type { MaskType } from '../types';
import type { ChangeEvent } from 'react';
interface UseMaskProps {
    initialValue?: string;
    mask: MaskType;
    onChange?: (maskedValue: string, rawValue: string) => void;
}
export declare function useMask({ initialValue, mask, onChange }: UseMaskProps): {
    value: string;
    inputRef: import("react").RefObject<HTMLInputElement | null>;
    rawValue: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export {};
//# sourceMappingURL=use-mask.d.ts.map