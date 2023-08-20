import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { Text } from 'components/Text/Text';
import { SignupForm } from 'components/SignupForm/SignupForm';

export const FormPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="Form" />
        <Text>Form hook case.</Text>
      </Container>
      <Container>
        <Title level={2} caption="Form: first case" />
        <SignupForm />
      </Container>
    </main>
  );
};
