function getFinalState(baseState, queue) {
  let finalState = baseState;

  return finalState;
}

export default function ImpStateQueue() {
  return (
    <>
      <TestCase baseState={0} queue={[1, 1, 1]} expected={1} />
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
        Queue: <b>{queue}</b>
      </p>
      <p style={{ color: actual === expected ? 'correct' : 'wrong' }}>
        Your resultat: <b>{actual}</b> (
        {actual === expected ? 'correct' : 'wrong'})
      </p>
    </>
  );
}
