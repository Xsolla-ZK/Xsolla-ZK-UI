import Styled from './tabs.styled';
import type {
  XZKUITabPanelProps,
  XZKUITabProps,
  XZKUITabsListProps,
  XZKUITabsProps,
} from './tabs.types';

function XZKUITabs(props: XZKUITabsProps) {
  return <Styled.Root {...props} />;
}

function TabsList({ size = 500, ...props }: XZKUITabsListProps) {
  return <Styled.List xzkuiSize={size} {...props} />;
}

function Tab({ size = 500, ...props }: XZKUITabProps) {
  return <Styled.Tab xzkuiSize={size} {...props} />;
}

function Panel(props: XZKUITabPanelProps) {
  return <Styled.Panel {...props} />;
}

XZKUITabs.List = TabsList;
XZKUITabs.Tab = Tab;
XZKUITabs.Panel = Panel;

export default XZKUITabs;
