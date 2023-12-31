import Container from 'components/Container';
import Title from 'components/Title';

export const NotFoundPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="sorry, page isn't found" />
        <p>Oops, there is no content. Error 404.</p>
      </Container>
    </main>
  );
};
