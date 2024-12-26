import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/base';
import XZKUIRichIcon from '../rich-icon/rich-icon';

const Main = styled('div')(
  ({ theme }) => `
    position: absolute;
    left: 0;
    top: calc(env(safe-area-inset-top) + ${theme.common.spacing[350]});
    bottom: 0;
    width: 100%;
    border-top-left-radius: ${theme.common.radius[600]};
    border-top-right-radius: ${theme.common.radius[600]};
    background-color: ${theme.theme.layer.floor1};
    overflow-x: hidden;
    overflow-y: auto;
  `,
);

const Header = styled('div')(
  ({ theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.common.spacing[300]} ${theme.common.spacing[400]};
    background-color: ${theme.theme.layer.floorOverlay};
  `,
);

const HeaderContent = styled('div')(
  () => `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
);

const HeaderLeft = styled('div')(
  ({ theme }) => `
    display: flex;
    column-gap: ${theme.common.spacing[200]};
    padding-right: ${theme.common.spacing[300]};
  `,
);

const HeaderRight = styled('div')(
  ({ theme }) => `
    display: flex;
    column-gap: ${theme.common.spacing[200]};
    padding-left: ${theme.common.spacing[300]};
  `,
);

const Title = styled('div')(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ theme, id = 'modal-title' }) => `
    font: ${theme.common.typography.compact[400].accent};
    color: ${theme.theme.content.neutralPrimary};
  `,
);

const Subtitle = styled('div')(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ theme, id = 'modal-description' }) => `
    margin-top: 6px;
    font: ${theme.common.typography.compact[250].default};
    color: ${theme.theme.content.neutralSecondary};
  `,
);

const CloseButton = styled(XZKUIRichIcon)(
  ({ theme }) => `
    color: ${theme.theme.overlay.neutral};
  `,
);

const ContentWrapper = styled('div')(
  ({ theme }) => `
    position: relative;
    flex: 0 0 auto;
    width: 100%;
    padding: ${theme.common.spacing[100]};
  `,
);

const Content = styled('div')(
  ({ theme }) => `
    overflow: hidden auto;
  `,
);

const Footer = styled('div')(
  ({ theme }) => `
    display: flex;
  `,
);

const XZKUIModalStyled = {
  Main,
  Header,
  HeaderContent,
  HeaderLeft,
  HeaderRight,
  Title,
  Subtitle,
  CloseButton,
  ContentWrapper,
  Content,
  Footer,
};

export default XZKUIModalStyled;
