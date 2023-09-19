import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import FixRequestCounter from 'components/FixRequestCounter';

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
        <FixRequestCounter />
        <Title level={3} caption="Solution" />
        <Text>
          Inside the handleClick event handler, the values of pending and
          completed correspond to what they were at the time of the click event.
          For the first render, pending was 0, so setPending&#40;pending -
          1&#41; becomes setPending&#40;-1&#41;, which is wrong. Since you want
          to increment or decrement the counters, rather than set them to a
          concrete value determined during the click, you can instead pass the
          updater functions: setPending&#40;p =&#62; p - 1&#41; etc..
        </Text>
      </Container>
      <Container>
        <Title level={2} caption="Implement the state queue yourself" />
      </Container>
    </main>
  );
};
