import { Container } from 'components';
import { Title } from 'components';
import { Paragraph } from 'components';

import { Clock } from 'tasks';

const ClockPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="clock" />
        <Paragraph>Clock hook case.</Paragraph>
      </Container>
      <Container>
        <Title level={2} caption="clock - first case" />
        <Clock />
      </Container>
    </main>
  );
};

export { ClockPage };
