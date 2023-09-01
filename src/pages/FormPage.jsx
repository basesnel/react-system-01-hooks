import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import SignupForm from 'components/SignupForm';

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
