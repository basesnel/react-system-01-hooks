import PropTypes from 'prop-types';

import { ImSpinner } from 'react-icons/im';

import pendingImage from 'assets/images/pending.png';
import PokemonDataView from '../PokemonDataView';
import Paragraph from 'components/Paragraph';

import css from './PokemonPendingView.module.css';

const PokemonPendingView = props => {
  const { pokemonName } = props;
  const { box, spinner, iconSpin } = css;

  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div className={box}>
      <div className={spinner}>
        <ImSpinner className={iconSpin} /> <Paragraph>Loading...</Paragraph>
      </div>
      <PokemonDataView pokemon={pokemon} style={{ opacity: 0.5 }} />
    </div>
  );
};

PokemonPendingView.propTypes = {
  pokemonName: PropTypes.string.isRequired,
};

export default PokemonPendingView;
