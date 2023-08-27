import { Loader } from 'components/Loader/Loader';
import { Text } from 'components/Text/Text';

import pendingImage from 'assets/images/pending.png';
import { PokemonDataView } from '../PokemonDataView/PokemonDataView';

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
      <Loader />
      <Text>Loading...</Text>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
};
