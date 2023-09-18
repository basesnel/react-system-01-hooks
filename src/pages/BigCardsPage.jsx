import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import BigCards from 'components/BigCards';

export const BigCardsPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="Big cards conception" />
        <Text>BList for big cards</Text>
      </Container>
      <Container>
        <BigCards />
      </Container>
    </main>
  );
};
