import { Container, Title, Paragraph } from 'components';

import { SkipFirstRender } from 'tasks';

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
