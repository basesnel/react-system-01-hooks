import { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';

import { Text } from 'components/Text/Text';

import pokemonAPI from 'services/pokemon-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOlVED: 'resolved',
  REJECTED: 'rejected',
};

export const PokemonInfo = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!pokemonName) {
      return;
    }

    setStatus(Status.PENDING);
    pokemonAPI
      .fetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus(Status.RESOlVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <Text>Please, enter pokemon name.</Text>;
  }

  if (status === Status.PENDING) {
    return <Text>Loading...</Text>;
  }

  if (status === Status.REJECTED) {
    return <Text>Error of query: {error.message}</Text>;
  }

  if (status === Status.RESOlVED) {
    return (
      <div>
        <Text>Pokemon info</Text>
        <Text>{pokemonName}</Text>
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          width="240"
        />
      </div>
    );
  }
};
