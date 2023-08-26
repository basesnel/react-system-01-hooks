import { useState } from 'react';
import { toast } from 'react-toastify';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="pokemonName"
        autoComplete="off"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
