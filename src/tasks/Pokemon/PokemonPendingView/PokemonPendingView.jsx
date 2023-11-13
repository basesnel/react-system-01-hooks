import PropTypes from 'prop-types';

import { ImSpinner } from 'react-icons/im';

import pendingImage from 'assets/images/pending.png';
import PokemonDataView from '../PokemonDataView';
import Paragraph from 'components/Paragraph';

import css from './PokemonPendingView.module.css';

export default function PokemonPendingView({ pokemonName }) {
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
    <div className={css.box}>
      <div className={css.spinner}>
        <ImSpinner className={css['icon-spin']} />{' '}
        <Paragraph>Loading...</Paragraph>
      </div>
      <PokemonDataView pokemon={pokemon} style={{ opacity: 0.5 }} />
    </div>
  );
}

PokemonPendingView.propTypes = {
  pokemonName: PropTypes.string.isRequired,
};
