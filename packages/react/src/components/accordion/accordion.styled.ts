import styled from '@emotion/styled';
import { animated } from '@react-spring/web';

const Main = styled('div')(
  ({ theme }) => `
    margin: 0;
    padding: 0;
    list-style: none;
  `,
);

const Header = styled('div')(
  ({ theme }) => `
    display: flex;
    width: 100%;
    user-select: none;
    cursor: pointer;

    &:not(:first-of-type) {
    }
  `,
);

const HeaderTitle = styled('div')(
  ({ theme }) => `
    flex: 1;
    margin: 0;
  `,
);

const ContentWrapper = styled(animated.div)(
  () => `
    margin: 0;
    overflow: hidden;
    height: 0;
    opacity: 0;
  `,
);

const Content = styled('div')(
  ({ theme }) => `
    margin: 0;
    word-wrap: break-word;
  `,
);

const XZKUIAccordionStyled = {
  Main,
  Header,
  HeaderTitle,
  ContentWrapper,
  Content,
};

export default XZKUIAccordionStyled;
