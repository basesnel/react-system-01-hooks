import { PokemonForm } from 'components/PokemonForm/PokemonForm';
import { Text } from 'components/Text/Text';
import { useEffect, useState } from 'react';

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then(pokemon => setPokemon(pokemon))
        .finally(setLoading(false));
    }, 1000);
  }, []);

  return (
    <div>
      <PokemonForm />
      {loading && <Text>Loading...</Text>}
      {pokemon && <Text>{pokemon.name}</Text>}
    </div>
  );
};
