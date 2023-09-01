import errorImage from 'assets/images/404.png';
import PokemonDataView from '../PokemonDataView';

export default function PokemonErrorView({ message }) {
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
}
