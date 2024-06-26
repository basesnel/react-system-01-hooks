import { Container, Title, Paragraph } from 'components';

import { Characters } from 'tasks';

const CharactersPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="characters" />
        <Paragraph>Character list case</Paragraph>
      </Container>
      <Container>
        <Characters />
      </Container>
    </main>
  );
};

export { CharactersPage };
