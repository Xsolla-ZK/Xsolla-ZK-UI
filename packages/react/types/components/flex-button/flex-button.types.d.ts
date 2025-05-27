import type { FLEX_BUTTON_COMPONENT_NAME } from './flex-button.constants';
import type { FlexButtonFrame } from './flex-button.styled';
import type { GetComponentTone } from '../../types';
import type { ComponentsConfig } from '../../utils';
import type { GetProps } from '@tamagui/core';
export type FlexButtonTone = GetComponentTone<typeof FLEX_BUTTON_COMPONENT_NAME>;
export type FlexButtonSizes = keyof ComponentsConfig['flexButton'] | (string & {});
export type FlexButtonContextType = {
    size: FlexButtonSizes;
    tone: FlexButtonTone;
    disabled: boolean;
};
export type FlexButtonSharedProps = GetProps<typeof FlexButtonFrame>;
export interface FlexButtonProps extends FlexButtonSharedProps {
    tone?: FlexButtonTone;
}
//# sourceMappingURL=flex-button.types.d.ts.map