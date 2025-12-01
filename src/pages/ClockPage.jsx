import { Container, Heading, P } from 'components';

import { Clock } from 'tasks';

const ClockPage = () => {
  return (
    <main>
      <Container>
        <Heading level={1} isPageTitle>
          clock
        </Heading>
        <P>Clock hook case.</P>
      </Container>
      <Container>
        <Clock />
      </Container>
    </main>
  );
};

export { ClockPage };
