import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';

export const NotFound = () => {
  return (
    <main>
      <Container>
        <Title caption="Not found" />
        <p>Oops, there is no content. Error 404.</p>
      </Container>
    </main>
  );
};
