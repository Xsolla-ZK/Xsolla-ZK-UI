import type { LoaderFrame } from './loader.styled';
import type { ColorType } from '../../types';
import type { GetComponentTone } from '../../types';
import type { GetProps } from '@tamagui/core';
import type { LOADER_COMPONENT_NAME } from '@xsolla-zk/constants';
export type LoaderTone = GetComponentTone<typeof LOADER_COMPONENT_NAME>;
export type LoaderContextType = {
    size: number;
    mainColor: ColorType;
    spinColor: ColorType;
};
type LoaderSharedProps = GetProps<typeof LoaderFrame>;
export interface LoaderProps extends LoaderSharedProps {
    tone?: LoaderTone;
    mainColor?: ColorType;
    spinColor?: ColorType;
}
export {};
//# sourceMappingURL=loader.types.d.ts.map