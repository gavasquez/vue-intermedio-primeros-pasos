<script setup lang="ts">
import PokemonCardList from '../components/PokemonCardList.vue';
import { usePokemons } from '../composables/usePokemons';
//const { count, pokemons, isLoading } = usePokemons();
/* const data = await getPokemons();
const pokemons = ref<Pokemon[]>(data); */

/* const { isLoading, data: pokemons } = useQuery({
  queryKey: ['pokemons'],
  queryFn: getPokemons,
});
const count = computed(() => pokemons.value?.length ?? 0); */
const { count, isLoading, pokemons, isError, error } = usePokemons();
</script>
<template>
  <h1 v-if="isLoading">Cargando...</h1>

  <div v-else-if="isError">
    {{ error }}
  </div>

  <div v-else>
    <h1>Pokemon List Native- ({{ count }})</h1>
    <PokemonCardList :pokemons="pokemons ?? []" />
  </div>
</template>
