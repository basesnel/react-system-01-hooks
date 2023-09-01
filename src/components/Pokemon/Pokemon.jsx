import { useState } from 'react';

import PokemonInfo from 'components/Pokemon/PokemonInfo';
import SearchBar from 'components/SearchBar';

export const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <>
      <SearchBar onFormSubmit={setPokemonName} query="pokemon" />
      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
};
