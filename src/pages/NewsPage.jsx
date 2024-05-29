import { Container } from 'components';
import { Title } from 'components';
import { Paragraph } from 'components';
import { VisuallyHidden } from 'components';

import { News } from 'tasks';

const NewsPage = () => {
  return (
    <main>
      <VisuallyHidden>
        <Container>
          <Title level={1} caption="news" />
          <Paragraph>News hook case.</Paragraph>
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
