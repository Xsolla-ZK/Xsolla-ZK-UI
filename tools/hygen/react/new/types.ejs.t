---
to: packages/react/src/components/<%= h.changeCase.kebab(name) %>/<%= h.changeCase.kebab(name) %>.types.ts
---
import type { ReactNode } from 'react';

export interface XZKUI<%= h.changeCase.pascal(name) %>Props {
  children: ReactNode;
}
