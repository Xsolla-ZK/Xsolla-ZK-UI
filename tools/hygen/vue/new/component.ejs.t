---
to: packages/vue/src/components/<%= name %>/<%= h.changeCase.pascal(name) %>.vue
---
<template>
  <div class="<%= h.changeCase.kebab(name) %>">
    <slot />
  </div>
</template>

<script lang="ts">
import type { XZKUI<%= h.changeCase.pascal(name) %>Props } from './<%= h.changeCase.pascal(name) %>.types.ts';

const props = defineProps<XZKUI<%= h.changeCase.pascal(name) %>Props>();
</script>

<style scoped lang="scss">
  .<%= h.changeCase.kebab(name) %> {
    /* Your styles */
  }
</style>