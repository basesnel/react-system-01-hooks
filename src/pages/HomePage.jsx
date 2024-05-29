import { Container, Title, Paragraph } from 'components';

const HomePage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="react hook cases" />
        <Paragraph>Welcome to hook cases on React!</Paragraph>
      </Container>
    </main>
  );
};

export { HomePage };
