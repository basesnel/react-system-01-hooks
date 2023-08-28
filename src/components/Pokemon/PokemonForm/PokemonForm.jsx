import { useState } from 'react';
import { toast } from 'react-toastify';

import { DecoratedForm } from 'components/DecoratedForm/DecoratedForm';
import { DecoratedInput } from 'components/DecoratedInput/DecoratedInput';
import { DecoratedSubmit } from 'components/DecoratedSubmit/DecoratedSubmit';

export const PokemonForm = ({ onFormSubmit }) => {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = event => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      return toast.warning('Please, input pokemon name!');
    }

    onFormSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <DecoratedForm onSubmit={handleSubmit}>
      <DecoratedInput
        inputName="pokemonName"
        inputValue={pokemonName}
        inputLabel="Pokemon name"
        handleChange={handleNameChange}
      />
      <DecoratedSubmit caption="Search" />
    </DecoratedForm>
  );
};
