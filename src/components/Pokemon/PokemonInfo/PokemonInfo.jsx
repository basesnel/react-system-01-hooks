import { useEffect, useState } from 'react';

import pokemonAPI from 'services/pokemon-api';

import { Text } from 'components/Text/Text';

import { PokemonErrorView } from '../PokemonErrorView/PokemonErrorView';
import { PokemonDataView } from '../PokemonDataView/PokemonDataView';
import { PokemonPendingView } from '../PokemonPendingView/PokemonPendingView';

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
    setTimeout(() => {
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
    }, 2000);
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <Text>Please, enter pokemon name.</Text>;
  }

  if (status === Status.PENDING) {
    return <PokemonPendingView />;
  }

  if (status === Status.REJECTED) {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === Status.RESOlVED) {
    return <PokemonDataView pokemon={pokemon} />;
  }
};
