import PropTypes from 'prop-types';

import { Image, Title } from 'components';

import css from './PokemonDataView.module.css';

const PokemonDataView = props => {
  const { pokemon, ...delegated } = props;
  const { box, thumb } = css;

  const { sprites, name, stats } = pokemon;

  return (
    <div className={box} {...delegated}>
      <Image
        src={sprites.other['official-artwork'].front_default}
        desc={name}
      />
      <div className={thumb}>
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
};

PokemonDataView.propTypes = {
  pokemon: PropTypes.object.isRequired,
  delegated: PropTypes.any,
};

PokemonDataView.defaultProps = {
  delegated: null,
};

export default PokemonDataView;
