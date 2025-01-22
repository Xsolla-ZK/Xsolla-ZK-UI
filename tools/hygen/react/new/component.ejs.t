---
to: packages/react/src/components/<%= h.changeCase.kebab(name) %>/<%= h.changeCase.kebab(name) %>.tsx
---
import type { XZKUI<%= h.changeCase.pascal(name) %>Props } from './<%= h.changeCase.kebab(name) %>.types';
import Styled from './<%= h.changeCase.kebab(name) %>.styled';

function XZKUI<%= h.changeCase.pascal(name) %>({ children }: XZKUI<%= h.changeCase.pascal(name) %>Props) {
  return (
    <Styled.Root>{children}</Styled.Root>
  );
}

export default XZKUI<%= h.changeCase.pascal(name) %>;
