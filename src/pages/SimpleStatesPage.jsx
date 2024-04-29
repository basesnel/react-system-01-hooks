import { useEffect, useState, useReducer } from 'react';

import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import FlexBox from 'components/FlexBox';
import Button from 'components/Button';
import Caption from 'components/Caption';
import Grid from 'components/Grid';
import Card from 'components/Card';

import LazyExample from 'tasks/LazyInitState/LazyExample';
import NoLazyExample from 'tasks/LazyInitState/NoLazyExample';
import ResettingKey from 'tasks/ResettingKey';
import StoringPrevState from 'tasks/StoringPrevState';

import Prac01 from 'tasks/SimpleStates/Prac01';

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

export const SimpleStatesPage = () => {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(countReducer, { countR: 0 });

  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [numberC, setNumberC] = useState(0);

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
        <Title level={1} caption="examples of simple states" />
        <Paragraph>Counter hook case.</Paragraph>
      </Container>
      <Container>
        <Grid>
          <Card title="prac01: counters with own state">
            <Prac01 />
          </Card>
          <Card title="counter with general state">
            <FlexBox>
              <Button
                caption={`Clicked ${count} times`}
                onClick={handleClick}
              />
              <Button
                caption={`Clicked ${count} times`}
                onClick={handleClick}
              />
            </FlexBox>
          </Card>
          <Card title="counter a and counter b">
            <Paragraph>Counters with useEffect hook case.</Paragraph>
            <FlexBox>
              <Button
                caption={`pressed the button ${counterA} times`}
                onClick={handleCounterAIncrement}
              />
              <Button
                caption={`pressed the button ${counterB} times`}
                onClick={handleCounterBIncrement}
              />
            </FlexBox>
          </Card>
          <Card title="counter with reducer">
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
          </Card>
          <Card title="update the same counter multiple times before the next render">
            <FlexBox>
              <Button
                caption="+3"
                onClick={() => {
                  setNumberA(n => n + 1);
                  setNumberA(n => n + 1);
                  setNumberA(n => n + 1);
                }}
              />
            </FlexBox>
            <Caption text={`number A: ${numberA.toString()}`} />
          </Card>
          <Card title="update state after replacing it">
            <FlexBox>
              <Button
                caption="Increase the number"
                onClick={() => {
                  setNumberB(numberB + 5);
                  setNumberB(n => n + 1);
                }}
              />
            </FlexBox>
            <Caption text={`number B: ${numberB.toString()}`} />
          </Card>
          <Card title="replace state after updating it">
            <FlexBox>
              <Button
                caption="Increase the number"
                onClick={() => {
                  setNumberC(numberC + 5);
                  setNumberC(n => n + 1);
                  setNumberC(42);
                }}
              />
            </FlexBox>
            <Caption text={`number C: ${numberC.toString()}`} />
          </Card>
          <Card title="Passing the initializer function">
            <LazyExample />
          </Card>
          <Card title="Passing the initial state directly">
            <NoLazyExample />
          </Card>
          <Card title="Resetting state with a key">
            <ResettingKey />
          </Card>
          <Card title="Storing information from previous renders">
            <StoringPrevState />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};
