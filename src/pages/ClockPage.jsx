import { Container, Title, P } from 'components';

import { Clock } from 'tasks';

const ClockPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="clock" />
        <P>Clock hook case.</P>
      </Container>
      <Container>
        <Title level={2} caption="clock - first case" />
        <Clock />
      </Container>
    </main>
  );
};

export { ClockPage };
