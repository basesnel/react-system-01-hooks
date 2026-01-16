import { Main, Container, H, P } from 'components';
import { SignupForm } from 'tasks';

const FormPage = () => {
  return (
    <Main>
      <Container>
        <H level={1}>form</H>
        <P>Form hook case.</P>
      </Container>
      <Container>
        <SignupForm />
      </Container>
    </Main>
  );
};

export { FormPage };
