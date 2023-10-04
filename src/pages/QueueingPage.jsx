import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import FixRequestCounter from 'tasks/FixRequestCounter';
import ImpStateQueue from 'tasks/ImpStateQueue';

export const QueueingPage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="queueing state tasks" />
        <Text>Cases of queueing series states.</Text>
      </Container>
      <Container>
        <Title level={2} caption="fix a request counter" />
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
        <Title level={3} caption="solution" />
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
        <Title level={2} caption="implement the state queue yourself" />
        <Text>
          In this challenge, you will reimplement a tiny part of React from
          scratch! It&apos;s not as hard as it sounds.
        </Text>
        <Text>
          Scroll through the sandbox preview. Notice that it shows{' '}
          <b>four test cases</b>. They correspond to the examples you&apos;ve
          seen earlier on this page. Your task is to implement the getFinalState
          function so that it returns the correct result for each of those
          cases. If you implement it correctly, all four tests should pass.
        </Text>
        <Text>
          You will receive two arguments: baseState is the initial state
          &#40;like 0&#41;, and the queue is an array which contains a mix of
          numbers &#40;like 5&#41; and updater functions &#40;like n =&#62; n +
          1&#41; in the order they were added.
        </Text>
        <Text>
          Your task is to return the final state, just like the tables on this
          page show!
        </Text>
        <ImpStateQueue />
        <Title level={3} caption="Solution" />
        <Text>
          The exact algorithm described on this page that React uses to
          calculate the final state - is in the code of function
          getFinalState&#40;&#41;.
        </Text>
      </Container>
    </main>
  );
};
