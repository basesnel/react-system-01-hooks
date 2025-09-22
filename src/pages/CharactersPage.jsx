import { Container, Title, P } from 'components';

import { Characters } from 'tasks';

const CharactersPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="characters" />
        <P>Character list case</P>
      </Container>
      <Container>
        <Characters />
      </Container>
    </main>
  );
};

export { CharactersPage };
