import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';

import BigCards from 'tasks/BigCards';

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
