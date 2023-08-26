import errorImage from 'assets/images/404.png';

import { Text } from 'components/Text/Text';

export const PokemonErrorView = ({ message }) => {
  return (
    <div role="alert">
      <img src={errorImage} width="400" alt="Not found" />
      <Text>{message}</Text>
    </div>
  );
};
