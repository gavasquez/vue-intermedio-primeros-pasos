<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import type { RouterLink } from '../../router/list-routes';
import { pokemonRoutes } from '../router';

const routeLinks: RouterLink[] =
  pokemonRoutes.children?.map(({ name, path, props }) => {
    const { title, visible } = props as { title: string; visible: boolean };
    return {
      name: name?.toString() ?? '',
      path: path,
      title: title,
      visible: visible,
    };
  }) || [];
</script>
<template>
  <NavBar :links="routeLinks" is-secundary />
  <div>
    <!-- <h4>Pokemon Layout</h4> -->
    <!--  <Suspense> -->
    <RouterView />
    <!-- Cargando para el suspense -->
    <!-- <template #fallback>
        <h4>Loading...</h4>
      </template>
    </Suspense> -->
  </div>
</template>
