import { PokemonView } from 'components/Pokemon/PokemonView/PokemonView';
import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { Text } from 'components/Text/Text';

export const PokemonPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="Pokemon API" />
        <Text>Pokemon rest API hook case.</Text>
      </Container>
      <Container>
        <Title level={2} caption="Pokemon - first case" />
        <PokemonView />
      </Container>
    </main>
  );
};
