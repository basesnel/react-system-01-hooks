import { useEffect, useState, useReducer } from 'react';

import Container from 'components/Container';
import Title from 'components/Title';
import Text from 'components/Text';
import Grid from 'components/Grid';
import ButtonCount from 'components/ButtonCount';
import DecoratedButton from 'components/DecoratedButton';

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, countR: state.countR + action.payload };

    case 'decrement':
      return { ...state, countR: state.countR - action.payload };

    default:
      throw new Error(`Unsupported action type ${action.type}`);
    // return state;
  }
};

export const CounterPage = () => {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(countReducer, { countR: 0 });

  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const [number, setNumber] = useState(0);

  useEffect(() => {
    const totalCount = counterA + counterB;
    document.title = `You are clicked ${totalCount} times`;
    console.log('useEffect is triggered ' + Date.now());
  }, [counterA, counterB]);

  function handleClick() {
    setCount(count + 1);
  }

  const handleCounterAIncrement = () => {
    setCounterA(state => state + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(state => state + 1);
  };

  return (
    <main>
      <Container>
        <Title level={1} caption="Counter" />
        <Text>Counter hook case.</Text>
      </Container>
      <Container>
        <Title level={2} caption="Counter with own state" />
        <Grid>
          <ButtonCount />
          <ButtonCount />
          <ButtonCount />
          <ButtonCount />
          <ButtonCount />
        </Grid>
      </Container>
      <Container>
        <Title level={2} caption="Counter with general state" />
        <Grid>
          <DecoratedButton
            caption={`Clicked ${count} times`}
            onClick={handleClick}
          />
          <DecoratedButton
            caption={`Clicked ${count} times`}
            onClick={handleClick}
          />
        </Grid>
      </Container>
      <Container>
        <Title level={2} caption="CounterA and CounterB" />
        <Text>Counters with useEffect hook case.</Text>
        <Grid>
          <DecoratedButton
            caption={`pressed the button ${counterA} times`}
            onClick={handleCounterAIncrement}
          />
          <DecoratedButton
            caption={`pressed the button ${counterB} times`}
            onClick={handleCounterBIncrement}
          />
        </Grid>
      </Container>
      <Container>
        <Title level={2} caption="Counter with reducer" />
        <Grid>
          <DecoratedButton
            caption={`Decrease ${state.countR}`}
            onClick={() => dispatch({ type: 'decrement', payload: 1 })}
          />
          <DecoratedButton
            caption={`Increase ${state.countR}`}
            onClick={() => dispatch({ type: 'increment', payload: 1 })}
          />
        </Grid>
      </Container>
      <Container>
        <Title
          level={2}
          caption="Update the same counter multiple times before the next render"
        />
        <Grid>
          <DecoratedButton
            caption="+3"
            onClick={() => {
              setNumber(n => n + 1);
              setNumber(n => n + 1);
              setNumber(n => n + 1);
            }}
          />
          <Text>{number}</Text>
        </Grid>
      </Container>
    </main>
  );
};
