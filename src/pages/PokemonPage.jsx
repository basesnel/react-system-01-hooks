import { Main, Container, H, P } from 'components';

import { Pokemon } from 'tasks';

const PokemonPage = () => {
  return (
    <Main>
      <Container>
        <H level={1}>pokemon api</H>
        <P>Pokemon rest API hook case.</P>
      </Container>
      <Container>
        <Pokemon />
      </Container>
    </Main>
  );
};

export { PokemonPage };
