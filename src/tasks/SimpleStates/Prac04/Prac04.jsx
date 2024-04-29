import { useReducer } from 'react';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, countR: state.countR + action.payload };

    case 'decrement':
      return { ...state, countR: state.countR - action.payload };

    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
};

export default function Prac04() {
  const [state, dispatch] = useReducer(countReducer, { countR: 0 });

  return (
    <FlexBox>
      <Button
        caption={`Decrease ${state.countR}`}
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      />
      <Button
        caption={`Increase ${state.countR}`}
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      />
    </FlexBox>
  );
}
