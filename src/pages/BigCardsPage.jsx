import { Container, H, P } from 'components';

import { BigCards } from 'tasks';

const BigCardsPage = () => {
  return (
    <main>
      <Container>
        <H level={1} isPageTitle>
          big cards conception
        </H>
        <P>List for big cards</P>
      </Container>
      <Container>
        <BigCards />
      </Container>
    </main>
  );
};

export { BigCardsPage };
