import { useState } from 'react';

import PokemonInfo from 'tasks/Pokemon/PokemonInfo';
import SearchBar from 'components/SearchBar';

export default function Pokemon() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <>
      <SearchBar onFormSubmit={setPokemonName} query="pokemon" />
      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
}
