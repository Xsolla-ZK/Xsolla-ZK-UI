import type { SheetProps } from './sheet.types';
import type { FunctionComponent } from 'react';
type SheetNativePlatforms = 'ios';
export declare function getNativeSheet(platform: SheetNativePlatforms): FunctionComponent<SheetProps> | null;
export declare function setupNativeSheet(platform: SheetNativePlatforms, RNIOSModal: {
    ModalSheetView: any;
    ModalSheetViewMainContent: any;
}): void;
export {};
//# sourceMappingURL=native-sheet.d.ts.map