import { Main, Container, H, P } from 'components';

import { News } from 'tasks';

const NewsPage = () => {
  return (
    <Main>
      <Container>
        <H level={1}>news</H>
        <P>News hook case.</P>
      </Container>
      <Container>
        <News />
      </Container>
    </Main>
  );
};

export { NewsPage };
