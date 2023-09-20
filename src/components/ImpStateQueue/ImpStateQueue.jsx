function getFinalState(baseState, queue) {
  return queue.reduce((prevValue, element) => {
    return typeof element === 'function' ? element(prevValue) : element;
  }, baseState);

  // let finalState = baseState;

  // for (let update of queue) {
  //   if (typeof update === 'function') {
  //     finalState = update(finalState);
  //   } else {
  //     finalState = update;
  //   }
  // }

  // return finalState;
}

function increment(n) {
  return n + 1;
}
increment.toString = () => 'n => n+1';

export default function ImpStateQueue() {
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
}

function TestCase({ baseState, queue, expected }) {
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
}
