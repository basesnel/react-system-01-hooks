import { Container, H, Main, P } from 'components';

import { BigCards } from 'tasks';

const BigCardsPage = () => {
  return (
    <Main>
      <Container>
        <H level={1} isPageTitle>
          big cards conception
        </H>
        <P>List for big cards</P>
      </Container>
      <Container>
        <BigCards />
      </Container>
    </Main>
  );
};

export { BigCardsPage };
