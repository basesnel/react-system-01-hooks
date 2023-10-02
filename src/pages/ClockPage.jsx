import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';

import Clock from 'tasks/Clock';

export const ClockPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="Clock" />
        <Text>Clock hook case.</Text>
      </Container>
      <Container>
        <Title level={1} caption="Clock - first case" />
        <Clock />
      </Container>
    </main>
  );
};
