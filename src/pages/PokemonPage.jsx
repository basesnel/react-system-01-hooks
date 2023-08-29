import { Pokemon } from 'components/Pokemon/Pokemon';
import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { Text } from 'components/Text/Text';
import { VisuallyHidden } from 'components/VisuallyHidden/VisuallyHidden';

export const PokemonPage = () => {
  return (
    <main>
      <VisuallyHidden>
        <Container>
          <Title level={1} caption="Pokemon API" />
          <Text>Pokemon rest API hook case.</Text>
        </Container>
      </VisuallyHidden>
      <Container>
        <VisuallyHidden>
          <Title level={2} caption="Pokemon - first case" />
        </VisuallyHidden>
        <Pokemon />
      </Container>
    </main>
  );
};
