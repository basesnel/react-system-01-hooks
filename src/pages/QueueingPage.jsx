import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';

export const QueueingPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="Queueing state tasks" />
        <Text>Cases of queueing series states.</Text>
      </Container>
      <Container>
        <Title level={2} caption="Fix a request counter" />
        <Text>
          You&apos;re working on an art marketplace app that lets the user
          submit multiple orders for an art item at the same time. Each time the
          user presses the “Buy” button, the “Pending” counter should increase
          by one. After three seconds, the “Pending” counter should decrease,
          and the “Completed” counter should increase.
        </Text>
        <Text>
          However, the “Pending” counter does not behave as intended. When you
          press “Buy”, it decreases to -1 (which should not be possible!). And
          if you click fast twice, both counters seem to behave unpredictably.
        </Text>
        <Text>Why does this happen? Fix both counters.</Text>
      </Container>
      <Container>
        <Title level={2} caption="Implement the state queue yourself" />
      </Container>
    </main>
  );
};
