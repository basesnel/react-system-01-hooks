import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import VisuallyHidden from 'components/VisuallyHidden';

import News from 'tasks/News';

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