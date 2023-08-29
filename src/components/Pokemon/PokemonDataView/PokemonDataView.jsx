import { DecoratedImg } from 'components/DecoratedImg/DecoratedImg';
import { Title } from 'components/Title/Title';

import css from './PokemonDataView.module.css';

export const PokemonDataView = ({ pokemon }) => {
  const { sprites, name, stats } = pokemon;

  return (
    <>
      <DecoratedImg
        src={sprites.other['official-artwork'].front_default}
        name={name}
      />
      <div className={css.thumb}>
        <Title level={3} caption={name} />
        <ul>
          {stats.map(entry => (
            <li key={entry.stat.name}>
              {entry.stat.name}: {entry.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
