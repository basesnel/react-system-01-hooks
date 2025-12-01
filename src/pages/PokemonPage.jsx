import { Container, Heading, P } from 'components';

import { Pokemon } from 'tasks';

const PokemonPage = () => {
  return (
    <main>
      <Container>
        <Heading level={1} isPageTitle>
          pokemon api
        </Heading>
        <P>Pokemon rest API hook case.</P>
      </Container>
      <Container>
        <Pokemon />
      </Container>
    </main>
  );
};

export { PokemonPage };
