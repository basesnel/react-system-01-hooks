import { Container, Heading, P } from 'components';

import { Characters } from 'tasks';

const CharactersPage = () => {
  return (
    <main>
      <Container>
        <Heading level={1} isPageTitle>
          characters
        </Heading>
        <P>Character list case</P>
      </Container>
      <Container>
        <Characters />
      </Container>
    </main>
  );
};

export { CharactersPage };
