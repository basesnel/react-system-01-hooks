import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import VisuallyHidden from 'components/VisuallyHidden';
import News from 'components/News/News';

export const NewsPage = () => {
  return (
    <main>
      <VisuallyHidden>
        <Container>
          <Title level={1} caption="News" />
          <Text>News hook case.</Text>
        </Container>
      </VisuallyHidden>
      <Container>
        <VisuallyHidden>
          <Title level={2} caption="News: first case" />
        </VisuallyHidden>
        <News />
      </Container>
    </main>
  );
};
