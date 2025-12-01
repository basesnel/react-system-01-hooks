import { Container, Heading, P } from 'components';

import { SkipFirstRender } from 'tasks';

const SkipFirstRenderPage = () => {
  return (
    <main>
      <Container>
        <Heading level={1} isPageTitle>
          skip first render
        </Heading>
        <P>Skip first render - useEffect case.</P>
      </Container>
      <Container>
        <SkipFirstRender />
      </Container>
    </main>
  );
};

export { SkipFirstRenderPage };
