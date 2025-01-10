/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { tabsThemeSizes } from './tabs.theme';
import type { XZKUIPimpleProps } from '../pimple/pimple.types';
import type { TabPanelProps, TabProps, TabsListProps, TabsProps } from '@mui/base';

type Sizes = (typeof tabsThemeSizes)[number];

export interface XZKUITabsBaseProps {
  size: Sizes;
}

export interface XZKUITabsProps extends TabsProps {}

export interface XZKUITabsListProps extends Partial<XZKUITabsBaseProps>, TabsListProps {}

export interface XZKUITabProps extends Partial<XZKUITabsBaseProps>, TabProps {
  pimple?: Omit<XZKUIPimpleProps, 'size'>;
}

export interface XZKUITabPanelProps extends TabPanelProps {}
