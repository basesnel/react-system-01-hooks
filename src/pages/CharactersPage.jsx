import { Container, H, P } from 'components';

import { Characters } from 'tasks';

const CharactersPage = () => {
  return (
    <main>
      <Container>
        <H level={1} isPageTitle>
          characters
        </H>
        <P>Character list case</P>
      </Container>
      <Container>
        <Characters />
      </Container>
    </main>
  );
};

export { CharactersPage };
