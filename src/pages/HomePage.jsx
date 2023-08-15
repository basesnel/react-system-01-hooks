import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { Text } from 'components/Text/Text';

export const Home = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="React hook cases" />
        <Text>Welcome to hook cases on React!</Text>
      </Container>
    </main>
  );
};
