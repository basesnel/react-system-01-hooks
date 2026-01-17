import { Main, Container, H, P } from 'components';

import { SkipFirstRender } from 'tasks';

const SkipFirstRenderPage = () => {
  return (
    <Main>
      <Container>
        <H level={1}>skip first render</H>
        <P>Skip first render - useEffect case.</P>
      </Container>
      <Container>
        <SkipFirstRender />
      </Container>
    </Main>
  );
};

export { SkipFirstRenderPage };
