import PropTypes from 'prop-types';

import PokemonDataView from '../PokemonDataView';

import errorImage from 'assets/images/404.png';

const PokemonErrorView = props => {
  const { message } = props;

  const pokemon = {
    name: message,
    sprites: {
      other: {
        'official-artwork': {
          front_default: errorImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
};

PokemonErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default PokemonErrorView;
