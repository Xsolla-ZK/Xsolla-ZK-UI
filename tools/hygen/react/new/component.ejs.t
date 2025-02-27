---
to: packages/react/src/components/<%= h.changeCase.kebab(name) %>/<%= h.changeCase.kebab(name) %>.tsx
---
import type { <%= h.changeCase.pascal(name) %>Props } from './<%= h.changeCase.kebab(name) %>.types';
import Styled from './<%= h.changeCase.kebab(name) %>.styled';

function <%= h.changeCase.pascal(name) %>({ children }: <%= h.changeCase.pascal(name) %>Props) {
  return (
    <Styled.Root>{children}</Styled.Root>
  );
}

export default <%= h.changeCase.pascal(name) %>;
