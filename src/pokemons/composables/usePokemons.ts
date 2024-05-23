import { computed } from 'vue';
import { getPokemons } from '../helpers/get-pokemons';
import { useQuery } from '@tanstack/vue-query';
import { initialPokemons } from '../data/initial-pokemons';

export const usePokemons = () => {
  const {
    isLoading,
    data: pokemons,
    isError,
    error,
  } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    retry: 0,
    initialData: initialPokemons,
  });

  return {
    /* Propiedades */
    pokemons,
    isLoading,
    isError,
    error,
    /* Computed */
    count: computed(() => pokemons.value?.length ?? 0),
  };
};
