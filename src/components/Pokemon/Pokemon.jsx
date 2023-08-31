// import { PokemonForm } from 'components/Pokemon/PokemonForm/PokemonForm';
import { PokemonInfo } from 'components/Pokemon/PokemonInfo/PokemonInfo';
import { useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';

export const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <>
      <SearchBar onFormSubmit={setPokemonName} query="pokemon" />
      {/* <PokemonForm onFormSubmit={setPokemonName} /> */}
      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
};
