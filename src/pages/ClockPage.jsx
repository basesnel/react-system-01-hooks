import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';

import Clock from 'tasks/Clock';

export const ClockPage = () => {
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
