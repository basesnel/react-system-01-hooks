import { Loader } from 'components/Loader/Loader';
import { Text } from 'components/Text/Text';

export const PokemonPendingView = () => {
  return (
    <div>
      <Loader />
      <Text>Loading...</Text>
    </div>
  );
};
