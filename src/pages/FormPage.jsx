import { Container, Title, P } from 'components';

import { SignupForm } from 'tasks';

const FormPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="form" />
        <P>Form hook case.</P>
      </Container>
      <Container>
        <Title level={2} caption="form: first case" />
        <SignupForm />
      </Container>
    </main>
  );
};

export { FormPage };
