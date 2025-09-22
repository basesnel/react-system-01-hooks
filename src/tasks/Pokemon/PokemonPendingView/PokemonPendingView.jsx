import PropTypes from 'prop-types';
import { ImSpinner } from 'react-icons/im';
import { P } from 'components';
import PokemonDataView from '../PokemonDataView';
import pendingImage from 'assets/images/pending.png';

import styles from './styles.module.css';

const PokemonPendingView = props => {
  const { pokemonName } = props;

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
    <div className={styles.box}>
      <div className={styles.spinner}>
        <ImSpinner className={styles.iconSpin} /> <P>Loading...</P>
      </div>
      <PokemonDataView pokemon={pokemon} style={{ opacity: 0.5 }} />
    </div>
  );
};

PokemonPendingView.propTypes = {
  pokemonName: PropTypes.string.isRequired,
};

export default PokemonPendingView;
