import { PokemonForm } from 'components/PokemonForm/PokemonForm';
import { PokemonInfo } from 'components/PokemonInfo/PokemonInfo';
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
