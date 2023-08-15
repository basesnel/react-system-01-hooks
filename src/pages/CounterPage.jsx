import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { ButtonCount } from 'components/ButtonCount/ButtonCount';

export const Counter = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="Counter" />
        <p>Counter hook case.</p>
      </Container>
      <Container>
        <Title level={2} caption="Counter with own data" />
        <ButtonCount />
        <ButtonCount />
        <ButtonCount />
        <ButtonCount />
        <ButtonCount />
      </Container>
    </main>
  );
};
