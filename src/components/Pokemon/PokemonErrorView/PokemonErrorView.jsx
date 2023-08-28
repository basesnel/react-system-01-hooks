import errorImage from 'assets/images/404.png';

import { DecoratedImg } from 'components/DecoratedImg/DecoratedImg';
import { Text } from 'components/Text/Text';

export const PokemonErrorView = ({ message }) => {
  return (
    <div role="alert">
      <DecoratedImg src={errorImage} name="Not found" width={400} />
      {/* <img src={errorImage} width="400" alt="Not found" /> */}
      <Text>{message}</Text>
    </div>
  );
};
