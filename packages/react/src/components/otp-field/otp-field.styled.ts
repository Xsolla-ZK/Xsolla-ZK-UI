import styled from '@emotion/styled';

const Main = styled('div')(
  () => `
    display: flex;
    width: 100%;
    justify-content: space-between;
  `,
);

const Root = styled('div')(
  ({ theme }) => `
    width: 40px;
    height: 40px;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
  `,
);

const XZKUIOtpFieldStyled = {
  Main,
  Root,
};

export default XZKUIOtpFieldStyled;
