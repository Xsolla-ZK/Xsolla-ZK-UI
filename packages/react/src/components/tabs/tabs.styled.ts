import styled from '@emotion/styled';
import {
  Tabs as MuiTabs,
  TabsList as MuiTabsList,
  Tab as MuiTab,
  TabPanel as MuiTabPanel,
  tabPanelClasses,
  tabClasses,
} from '@mui/base';
import shouldForwardProp from '@xsolla-zk-ui/react/utils/should-forward-prop';
import XZKUIPimpleStyled from '../pimple/pimple.styled';
import type { XZKUITabsBaseProps } from './tabs.types';
import type { XZKUIStyledProps } from '@xsolla-zk-ui/react/types/theme';

const Main = styled(MuiTabs)`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

type StyledProps = XZKUIStyledProps<XZKUITabsBaseProps>;

const Tab = styled(MuiTab)<StyledProps>(
  ({ theme }) => `
    position: relative;
    display: flex;
    align-items: center;
    gap: ${theme.common.spacing[100]};
    min-width: ${theme.common.size[200]};
    min-height: ${theme.common.size[200]};
    padding: 0;
    background: none;
    border: none;
    color: ${theme.theme.content.neutralPrimary};
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 8px;
      border-radius: ${theme.common.radius[200]};
      background-color: ${theme.theme.content.neutralPrimary};
      opacity: 0;
    }

    &.${tabClasses.selected} {
      &:before {
        opacity: 1;
      }

      ${XZKUIPimpleStyled.Main} {
        background-color: ${theme.theme.background.neutralHigh};
        color: ${theme.theme.content.staticLightPrimary};
      }
    }
    &.${tabClasses.disabled} {
      text-decoration: line-through;
      cursor: not-allowed;
    }

    ${XZKUIPimpleStyled.Main} {
      background-color: ${theme.theme.overlay.neutral};
      color: ${theme.theme.content.neutralPrimary};
    }
  `,
);

const List = styled(MuiTabsList, {
  shouldForwardProp,
})<StyledProps>(
  ({ theme }) => `
    display: flex;
    align-items: center;
    flex: none;
    white-space: nowrap;
    border-bottom: 1px solid ${theme.theme.border.neutralSecondary};
    overflow-x: auto;
  `,
  ({ theme, xzkuiSize }) => theme.components.tabs.sizes.list[xzkuiSize],
  ({ theme, xzkuiSize }) =>
    `
    ${Tab} {
      ${theme.components.tabs.sizes.tab[xzkuiSize].styles};
    }
  `,
);

const Panel = styled(MuiTabPanel)(
  () => `
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    flex: 1;
    overflow: auto;

    &.${tabPanelClasses.hidden} {
      display: none;
    }
  `,
);

const XZKUITabsStyled = {
  Main,
  List,
  Panel,
  Tab,
};

export default XZKUITabsStyled;
