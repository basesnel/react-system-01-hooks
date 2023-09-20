export function getFinalState(baseState, queue) {
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
