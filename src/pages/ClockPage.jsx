import { Container, H, P } from 'components';

import { Clock } from 'tasks';

const ClockPage = () => {
  return (
    <main>
      <Container>
        <H level={1}>clock</H>
        <P>Clock hook case.</P>
      </Container>
      <Container>
        <Clock />
      </Container>
    </main>
  );
};

export { ClockPage };
