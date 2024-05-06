import PropTypes from 'prop-types';

import { useState } from 'react';
import { toast } from 'react-toastify';

import Form from 'components/Form';
import Input from 'components/Input';
import DecoratedSubmit from 'components/DecoratedSubmit';

export default function PokemonForm({ onFormSubmit }) {
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
    <Form onSubmit={handleSubmit}>
      <Input
        inputType="text"
        inputName="pokemonName"
        inputValue={pokemonName}
        inputLabel="Pokemon name"
        handleChange={handleNameChange}
      />
      <DecoratedSubmit caption="Search" />
    </Form>
  );
}

PokemonForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
