import PropTypes from 'prop-types';

import DecoratedImg from 'components/DecoratedImg';
import Title from 'components/Title';

import css from './PokemonDataView.module.css';

export default function PokemonDataView({ pokemon, ...delegated }) {
  const { sprites, name, stats } = pokemon;

  return (
    <div className={css.box} {...delegated}>
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
    </div>
  );
}

PokemonDataView.propTypes = {
  pokemon: PropTypes.object.isRequired,
  delegated: PropTypes.any,
};
