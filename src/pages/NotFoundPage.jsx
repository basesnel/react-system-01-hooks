import { Main, Container, H, P } from 'components';

const NotFoundPage = () => {
  return (
    <Main>
      <Container>
        <H level={1}>sorry, page isn't found</H>
        <P>Oops, there is no content. Error 404.</P>
      </Container>
    </Main>
  );
};

export { NotFoundPage };
