import { Container } from 'components';
import { Title } from 'components';
import { Paragraph } from 'components';
import { VisuallyHidden } from 'components';

import { Pokemon } from 'tasks';

const PokemonPage = () => {
  return (
    <main>
      <VisuallyHidden>
        <Container>
          <Title level={1} caption="pokemon API" />
          <Paragraph>Pokemon rest API hook case.</Paragraph>
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
