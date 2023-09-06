import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';

export const NewsPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="News" />
        <Text>News hook case.</Text>
      </Container>
      <Container>
        <Title level={2} caption="News: first case" />
      </Container>
    </main>
  );
};
