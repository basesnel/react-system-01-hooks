import { useEffect, useState } from 'react';

import pokemonAPI from 'services/pokemon-api';

import PokemonErrorView from '../PokemonErrorView';
import PokemonDataView from '../PokemonDataView';
import PokemonPendingView from '../PokemonPendingView';
import PokemonIdleView from '../PokemonIdleView';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOlVED: 'resolved',
  REJECTED: 'rejected',
};

export default function PokemonInfo({ pokemonName }) {
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
    return <PokemonIdleView />;
  }

  if (status === Status.PENDING) {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }

  if (status === Status.REJECTED) {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === Status.RESOlVED) {
    return <PokemonDataView pokemon={pokemon} />;
  }
}
