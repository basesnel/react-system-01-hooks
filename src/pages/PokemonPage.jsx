import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import VisuallyHidden from 'components/VisuallyHidden';

import Pokemon from 'tasks/Pokemon';

export const PokemonPage = () => {
  return (
    <main>
      <VisuallyHidden>
        <Container>
          <Title level={1} caption="pokemon API" />
          <Text>Pokemon rest API hook case.</Text>
        </Container>
      </VisuallyHidden>
      <Container>
        <VisuallyHidden>
          <Title level={2} caption="pokemon - first case" />
        </VisuallyHidden>
        <Pokemon />
      </Container>
    </main>
  );
};
