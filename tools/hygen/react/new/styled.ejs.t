---
to: packages/react/src/components/<%= h.changeCase.kebab(name) %>/<%= h.changeCase.kebab(name) %>.styled.ts
---

import styled from '@emotion/styled';

const Root = styled('div')(
  ({ theme }) => `
    /* Your styles */
  `,
);

const <%= h.changeCase.pascal(name) %>Styled = {
  Root,
};

export default <%= h.changeCase.pascal(name) %>Styled;
