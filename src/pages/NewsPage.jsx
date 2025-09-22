import { Container, Title, P, VisuallyHidden } from 'components';

import { News } from 'tasks';

const NewsPage = () => {
  return (
    <main>
      <VisuallyHidden>
        <Container>
          <Title level={1} caption="news" />
          <P>News hook case.</P>
        </Container>
      </VisuallyHidden>
      <Container>
        <VisuallyHidden>
          <Title level={2} caption="news: first case" />
        </VisuallyHidden>
        <News />
      </Container>
    </main>
  );
};

export { NewsPage };
