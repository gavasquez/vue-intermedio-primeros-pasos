<script setup lang="ts">
import type { RouterLink } from '@/router/list-routes'

interface Props {
  title?: string
  links: RouterLink[]
  isSecundary?: boolean
}

withDefaults(defineProps<Props>(), {
  title: 'CompoApp',
  isSecundary: false
})
</script>
<template>
  <nav>
    <template v-if="!isSecundary">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
      <span v-if="$props.title">{{ title }}</span>
    </template>
    <RouterLink v-for="link in $props.links" :key="link.name" :to="link.path"
      >{{ link.name }}
    </RouterLink>
  </nav>
</template>
<style scoped>
nav {
  align-items: flex-start;
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
  width: 100%;
}
img {
  margin-right: 5px;
}
span {
  margin-right: 10px;
}
a {
  margin-right: 5px;
}

nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
