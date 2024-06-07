import PropTypes, { any } from 'prop-types';
import { getFinalState } from 'constants';

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

export default TestCase;
