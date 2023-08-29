// import { Loader } from 'components/Loader/Loader';
import { ImSpinner } from 'react-icons/im';
import { Text } from 'components/Text/Text';

import pendingImage from 'assets/images/pending.png';
import { PokemonDataView } from '../PokemonDataView/PokemonDataView';

import css from './PokemonPendingView.module.css';

export const PokemonPendingView = ({ pokemonName }) => {
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
    <div>
      {/* <Loader /> */}
      <div className={css.spinner}>
        <ImSpinner size="32" color="#808080" className={css['icon-spin']} />{' '}
        <Text>Loading...</Text>
      </div>
      {/* <Text>Loading...</Text> */}
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
};
