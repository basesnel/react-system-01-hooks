import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';

export const HomePage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="react hook cases" />
        <Text>Welcome to hook cases on React!</Text>
      </Container>
    </main>
  );
};
