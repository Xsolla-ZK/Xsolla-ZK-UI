import type { LoaderRoot } from './loader.styled';
import type { GetProps } from '@tamagui/core';

type LoaderSharedProps = GetProps<typeof LoaderRoot>;

export interface LoaderProps extends LoaderSharedProps {}
