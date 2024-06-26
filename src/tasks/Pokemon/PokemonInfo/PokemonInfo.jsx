import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchPokemon } from 'services';
import PokemonIdleView from '../PokemonIdleView';
import PokemonPendingView from '../PokemonPendingView';
import PokemonDataView from '../PokemonDataView';
import PokemonErrorView from '../PokemonErrorView';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOlVED: 'resolved',
  REJECTED: 'rejected',
};

const PokemonInfo = props => {
  const { pokemonName } = props;

  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!pokemonName) {
      return;
    }

    setStatus(Status.PENDING);
    setTimeout(() => {
      fetchPokemon(pokemonName)
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

  switch (status) {
    case Status.IDLE:
      return <PokemonIdleView />;

    case Status.PENDING:
      return <PokemonPendingView pokemonName={pokemonName} />;

    case Status.REJECTED:
      return <PokemonErrorView message={error.message} />;

    case Status.RESOlVED:
      return <PokemonDataView pokemon={pokemon} />;

    default:
      return null;
  }
};

PokemonInfo.propTypes = {
  pokemonName: PropTypes.string.isRequired,
};

export default PokemonInfo;
