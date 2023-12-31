import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';

import SignupForm from 'tasks/SignupForm';

export const FormPage = () => {
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
