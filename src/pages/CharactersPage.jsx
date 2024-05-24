import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';

import Characters from 'tasks/Characters';

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
