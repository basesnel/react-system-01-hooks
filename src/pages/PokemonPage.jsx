import { Container, Title, P, VisuallyHidden } from 'components';

import { Pokemon } from 'tasks';

const PokemonPage = () => {
  return (
    <main>
      <VisuallyHidden>
        <Container>
          <Title level={1} caption="pokemon API" />
          <P>Pokemon rest API hook case.</P>
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

export { PokemonPage };
