import Container from 'components/Container';
import { Title } from 'components/Title/Title';
import { Text } from 'components/Text/Text';

export const HomePage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="React hook cases" />
        <Text>Welcome to hook cases on React!</Text>
      </Container>
    </main>
  );
};
