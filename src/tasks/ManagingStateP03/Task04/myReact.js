import { useState } from 'react';

const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  return [state, dispatch];
};

export default useReducer;
