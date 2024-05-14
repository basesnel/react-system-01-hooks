import { useState } from 'react';

import PokemonInfo from 'tasks/Pokemon/PokemonInfo';
import SearchBar from 'components/SearchBar';

const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <>
      <SearchBar onFormSubmit={setPokemonName} query="pokemon" />
      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
};

export default Pokemon;
