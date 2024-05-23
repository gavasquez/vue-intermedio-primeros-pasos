import axios from 'axios';
import pokemonApi from '../api/pokemonApi';
import { type PokemonResponse, type Pokemon, type PokemonListResponse } from '../interfaces';
import { sleep } from './sleep';
//import { sleep } from './sleep';

export const getPokemons = async (): Promise<Pokemon[]> => {
  //throw new Error('Error de prueba');
  await sleep(4);
  const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45');

  const pokemonPromises: Promise<Pokemon>[] = [];

  for (const { url } of data.results) {
    const pokemonPromise = axios.get<PokemonResponse>(url).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default,
      };
    });
    pokemonPromises.push(pokemonPromise);
  }
  const pokemons = await Promise.all(pokemonPromises);
  return pokemons;
};
