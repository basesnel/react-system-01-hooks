import PropTypes, { any } from 'prop-types';

import { getFinalState } from 'constants';

function increment(n) {
  return n + 1;
}
increment.toString = () => 'n => n+1';

const ImpStateQueue = () => {
  return (
    <>
      <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
      <hr />
      <TestCase
        baseState={0}
        queue={[increment, increment, increment]}
        expected={3}
      />
      <hr />
      <TestCase baseState={0} queue={[5, increment]} expected={6} />
      <hr />
      <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
    </>
  );
};

const TestCase = props => {
  const { baseState, queue, expected } = props;

  const actual = getFinalState(baseState, queue);

  return (
    <>
      <p>
        Base state: <b>{baseState}</b>
      </p>
      <p>
        Queue: <b>[{queue.join(', ')}]</b>
      </p>
      <p>
        Expected result: <b>{expected}</b>
      </p>
      <p style={{ color: actual === expected ? 'green' : 'red' }}>
        Your resultat: <b>{actual}</b> (
        {actual === expected ? 'correct' : 'wrong'})
      </p>
    </>
  );
};

TestCase.propTypes = {
  baseState: PropTypes.number.isRequired,
  queue: PropTypes.arrayOf(any).isRequired,
  expect: PropTypes.number,
};

TestCase.defaultProps = {
  expect: null,
};

export default ImpStateQueue;
