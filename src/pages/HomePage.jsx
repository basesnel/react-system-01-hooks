import { Container, Heading, P } from 'components';

const HomePage = () => {
  return (
    <main>
      <Container>
        <Heading level={1} isPageTitle>
          react hook cases
        </Heading>
        <P>Welcome to hook cases on React!</P>
      </Container>
    </main>
  );
};

export { HomePage };
