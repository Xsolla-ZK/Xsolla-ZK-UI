import styled from '@emotion/styled';
import xzkuiModalClasses from './modal.classes';

const Root = styled('div')(
  ({ theme }) => `
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: ${theme.theme.layer.floor1};
    overflow-x: hidden;
    overflow-y: auto;

    &.${xzkuiModalClasses.curtain} {
      left: 0;
      top: calc(env(safe-area-inset-top) + ${theme.common.spacing[350]});
      bottom: 0;
      width: 100%;
      border-top-left-radius: ${theme.common.radius[600]};
      border-top-right-radius: ${theme.common.radius[600]};
    }
    &.${xzkuiModalClasses.popup} {
      left: 4px;
      right: 4px;
      max-height: calc(100% - (env(safe-area-inset-bottom) + ${theme.common.spacing[350]}));
      bottom: calc(env(safe-area-inset-bottom) + ${theme.common.spacing[350]});
      border-radius: ${theme.common.radius[600]};
    }
  `,
);

const HeaderContent = styled('div')(
  () => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  `,
);

const Header = styled('div')(
  ({ theme }) => `
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    padding: ${theme.common.spacing[300]} ${theme.common.spacing[400]};
    flex: 0 0 auto;
    z-index: 1;

    &:not(.${xzkuiModalClasses.headerEmpty}) {
      background-color: ${theme.theme.layer.floorOverlay};
      backdrop-filter: blur(200px);
    }

    > * {
      min-height: 48px;
    }

    ${HeaderContent} {
      flex: 1;
    }
  `,
);

const SideSlot = styled('div')(
  ({ theme }) => `
    display: flex;
    column-gap: ${theme.common.spacing[200]};
    align-items: center;
  `,
);

const HeaderLeft = styled(SideSlot)(
  ({ theme }) => `
    padding-right: ${theme.common.spacing[300]};
  `,
);

const HeaderRight = styled(SideSlot)(
  ({ theme }) => `
    padding-left: ${theme.common.spacing[300]};
  `,
);

const Title = styled('div')(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ theme, id = 'modal-title' }) => `
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font: ${theme.common.typography.compact[400].accent};
    color: ${theme.theme.content.neutralPrimary};
  `,
);

const Subtitle = styled('div')(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ theme, id = 'modal-description' }) => `
    margin-top: 6px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font: ${theme.common.typography.compact[250].default};
    color: ${theme.theme.content.neutralSecondary};
  `,
);

const ContentWrapper = styled('div')(
  ({ theme }) => `
    position: relative;
    flex: 1 1 0%;
    width: 100%;
    padding: ${theme.common.spacing[100]};
  `,
);

const Content = styled('div')(
  ({ theme }) => `
  `,
);

const Footer = styled('div')(
  ({ theme }) => `
    position: sticky;
    bottom: 0;
    display: flex;
    width: 100%;

    &.${xzkuiModalClasses.footerBlured} {
      background-color: ${theme.theme.layer.floorOverlay};
      backdrop-filter: blur(200px);
    }

    .${xzkuiModalClasses.curtain} & {
      padding: ${theme.common.spacing[100]} ${theme.common.spacing[100]} calc(env(safe-area-inset-bottom) + ${theme.common.spacing[350]});
    }
    .${xzkuiModalClasses.popup} & {
      padding: ${theme.common.spacing[100]};
    }

  `,
);

const XZKUIModalStyled = {
  Root,
  Header,
  HeaderContent,
  HeaderLeft,
  HeaderRight,
  Title,
  Subtitle,
  ContentWrapper,
  Content,
  Footer,
};

export default XZKUIModalStyled;
