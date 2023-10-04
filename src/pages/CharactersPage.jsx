import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';

import Characters from 'tasks/Characters';

export const CharactersPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="characters" />
        <Text>Character list case</Text>
      </Container>
      <Container>
        <Characters />
      </Container>
    </main>
  );
};
