import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import VisuallyHidden from 'components/VisuallyHidden';

import Pokemon from 'tasks/Pokemon';

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
