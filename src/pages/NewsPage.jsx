import { Container, Heading, P } from 'components';

import { News } from 'tasks';

const NewsPage = () => {
  return (
    <main>
      <Container>
        <Heading level={1} isPageTitle>
          news
        </Heading>
        <P>News hook case.</P>
      </Container>
      <Container>
        <News />
      </Container>
    </main>
  );
};

export { NewsPage };
