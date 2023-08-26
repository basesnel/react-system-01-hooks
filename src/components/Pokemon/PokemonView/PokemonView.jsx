import { PokemonForm } from 'components/Pokemon/PokemonForm/PokemonForm';
import { PokemonInfo } from 'components/Pokemon/PokemonInfo/PokemonInfo';
import { useState } from 'react';

export const PokemonView = () => {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <>
      <PokemonForm onFormSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
};