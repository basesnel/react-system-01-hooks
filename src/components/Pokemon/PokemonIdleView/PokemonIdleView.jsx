import { Text } from 'components/Text/Text';

import css from './PokemonIdleView.module.css';

export const PokemonIdleView = () => {
  return (
    <div className={css.box}>
      <Text>Please, enter pokemon name.</Text>
    </div>
  );
};
