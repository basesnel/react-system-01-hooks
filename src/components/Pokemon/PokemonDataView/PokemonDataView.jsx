import { Title } from 'components/Title/Title';

export const PokemonDataView = ({ pokemon }) => {
  const { sprites, name, stats } = pokemon;

  return (
    <div>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt={name}
        width="240"
      />
      <Title level={3} caption={name} />
      <ul>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};
