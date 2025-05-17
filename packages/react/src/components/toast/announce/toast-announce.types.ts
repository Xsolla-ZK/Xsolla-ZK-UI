import type { VisuallyHidden } from '../toast.styled';
import type { ToastScopedProps } from '../toast.types';
import type { ToastAnnounceExcludeFrame } from './toast-announce.styled';
import type { GetProps } from '@tamagui/core';

type ToastAnnounceExcludeFrameProps = GetProps<typeof ToastAnnounceExcludeFrame>;

export type ToastAnnounceExcludeProps = ToastAnnounceExcludeFrameProps & {
  altText?: string;
};

export interface ToastAnnounceProps
  extends Omit<GetProps<typeof VisuallyHidden>, 'children'>,
    ToastScopedProps<{ children: string[] }> {}
