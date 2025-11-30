import { Container, Heading, P } from 'components';

import { queueing } from 'tasks';

const QueueingPage = () => {
  const { FixRequestCounter, ImpStateQueue } = queueing;

  return (
    <main>
      <Container>
        <Heading level={1} isPageTitle>
          queueing state tasks
        </Heading>
        <P>Cases of queueing series states.</P>
      </Container>
      <Container>
        <Heading level={2}>Fix a request counter</Heading>
        <Heading level={3}>Task</Heading>
        <P>
          You&apos;re working on an art marketplace app that lets the user
          submit multiple orders for an art item at the same time. Each time the
          user presses the “Buy” button, the “Pending” counter should increase
          by one. After three seconds, the “Pending” counter should decrease,
          and the “Completed” counter should increase.
        </P>
        <P>
          However, the “Pending” counter does not behave as intended. When you
          press “Buy”, it decreases to -1 (which should not be possible!). And
          if you click fast twice, both counters seem to behave unpredictably.
        </P>
        <P>Why does this happen? Fix both counters.</P>
        <FixRequestCounter />
        <Heading level={3}>Solution</Heading>
        <P>
          Inside the handleClick event handler, the values of pending and
          completed correspond to what they were at the time of the click event.
          For the first render, pending was 0, so setPending&#40;pending -
          1&#41; becomes setPending&#40;-1&#41;, which is wrong. Since you want
          to increment or decrement the counters, rather than set them to a
          concrete value determined during the click, you can instead pass the
          updater functions: setPending&#40;p =&#62; p - 1&#41; etc..
        </P>
      </Container>
      <Container>
        <Heading level={2}>Implement the state queue yourself</Heading>
        <Heading level={3}>Task</Heading>
        <P>
          In this challenge, you will reimplement a tiny part of React from
          scratch! It&apos;s not as hard as it sounds.
        </P>
        <P>
          Scroll through the sandbox preview. Notice that it shows{' '}
          <b>four test cases</b>. They correspond to the examples you&apos;ve
          seen earlier on this page. Your task is to implement the getFinalState
          function so that it returns the correct result for each of those
          cases. If you implement it correctly, all four tests should pass.
        </P>
        <P>
          You will receive two arguments: baseState is the initial state
          &#40;like 0&#41;, and the queue is an array which contains a mix of
          numbers &#40;like 5&#41; and updater functions &#40;like n =&#62; n +
          1&#41; in the order they were added.
        </P>
        <P>
          Your task is to return the final state, just like the tables on this
          page show!
        </P>
        <ImpStateQueue />
        <Heading level={3}>Solution</Heading>
        <P>
          The exact algorithm described on this page that React uses to
          calculate the final state - is in the code of function
          getFinalState&#40;&#41;.
        </P>
      </Container>
    </main>
  );
};

export { QueueingPage };
