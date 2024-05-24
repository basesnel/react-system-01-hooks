import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';

import SkipFirstRender from 'tasks/SkipFirstRender';

const SkipFirstRenderPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="skip first render" />
        <Paragraph>Skip first render - useEffect case.</Paragraph>
      </Container>
      <Container>
        <Title level={2} caption="skip first render" />
        <SkipFirstRender />
      </Container>
    </main>
  );
};

export { SkipFirstRenderPage };
