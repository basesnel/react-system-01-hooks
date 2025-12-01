import { Container, Heading, P } from 'components';
import { SignupForm } from 'tasks';

const FormPage = () => {
  return (
    <main>
      <Container>
        <Heading level={1} isPageTitle>
          form
        </Heading>
        <P>Form hook case.</P>
      </Container>
      <Container>
        <SignupForm />
      </Container>
    </main>
  );
};

export { FormPage };
