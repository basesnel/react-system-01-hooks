import { useState } from 'react';

import SearchBar from 'components/SearchBar';
import PokemonInfo from 'tasks/Pokemon/PokemonInfo';

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
