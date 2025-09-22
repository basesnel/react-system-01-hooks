import { Container, Title, P } from 'components';

import { SkipFirstRender } from 'tasks';

const SkipFirstRenderPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="skip first render" />
        <P>Skip first render - useEffect case.</P>
      </Container>
      <Container>
        <Title level={2} caption="skip first render" />
        <SkipFirstRender />
      </Container>
    </main>
  );
};

export { SkipFirstRenderPage };
