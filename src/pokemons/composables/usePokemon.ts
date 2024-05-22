import { useQuery } from '@tanstack/vue-query';
import { gePokemonById } from '../helpers/get-pokemonById';

export const usePokemon = (id: string) => {
  const {
    isLoading,
    data: pokemon,
    isError,
    error: errorMessage,
  } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => gePokemonById(id),
  });

  return {
    isLoading,
    pokemon,
    isError,
    errorMessage,
  };
};
