import { Container } from 'components';
import { Title } from 'components';
import { Paragraph } from 'components';

import SignupForm from 'tasks/SignupForm';

const FormPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="form" />
        <Paragraph>Form hook case.</Paragraph>
      </Container>
      <Container>
        <Title level={2} caption="form: first case" />
        <SignupForm />
      </Container>
    </main>
  );
};

export { FormPage };
