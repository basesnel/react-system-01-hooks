import { Container } from 'components';
import { Title } from 'components';
import { Paragraph } from 'components';

import { BigCards } from 'tasks';

const BigCardsPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="big cards conception" />
        <Paragraph>List for big cards</Paragraph>
      </Container>
      <Container>
        <BigCards />
      </Container>
    </main>
  );
};

export { BigCardsPage };
