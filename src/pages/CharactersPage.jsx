import { Container, H, Main, P } from 'components';

import { Characters } from 'tasks';

const CharactersPage = () => {
  return (
    <Main>
      <Container>
        <H level={1} isPageTitle>
          characters
        </H>
        <P>Character list case</P>
      </Container>
      <Container>
        <Characters />
      </Container>
    </Main>
  );
};

export { CharactersPage };
