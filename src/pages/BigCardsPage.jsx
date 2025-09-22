import { Container, Title, P } from 'components';

import { BigCards } from 'tasks';

const BigCardsPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="big cards conception" />
        <P>List for big cards</P>
      </Container>
      <Container>
        <BigCards />
      </Container>
    </main>
  );
};

export { BigCardsPage };
