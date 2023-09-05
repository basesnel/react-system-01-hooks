import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import Characters from 'components/Characters';

export const CharactersPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="Characters" />
        <Text>Character list case</Text>
      </Container>
      <Container>
        <Characters />
      </Container>
    </main>
  );
};
