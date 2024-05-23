const getFinalState = (baseState, queue) => {
  return queue.reduce((prevValue, element) => {
    return typeof element === 'function' ? element(prevValue) : element;
  }, baseState);
};

export { getFinalState };
