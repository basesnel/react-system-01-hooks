import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';

import Clock from 'tasks/Clock';

export const ClockPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="clock" />
        <Text>Clock hook case.</Text>
      </Container>
      <Container>
        <Title level={2} caption="clock - first case" />
        <Clock />
      </Container>
    </main>
  );
};
