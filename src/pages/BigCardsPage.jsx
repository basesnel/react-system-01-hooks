import { Container, Heading, P } from 'components';

import { BigCards } from 'tasks';

const BigCardsPage = () => {
  return (
    <main>
      <Container>
        <Heading level={1} isPageTitle>
          big cards conception
        </Heading>
        <P>List for big cards</P>
      </Container>
      <Container>
        <BigCards />
      </Container>
    </main>
  );
};

export { BigCardsPage };
