import { useEffect, useState } from 'react';

import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { Text } from 'components/Text/Text';
import { Grid } from 'components/Grid/Grid';
import { ButtonCount } from 'components/ButtonCount/ButtonCount';
import { ButtonGeneralCount } from 'components/ButtonGeneralCount/ButtonGeneralCount';

export const CounterPage = () => {
  const [count, setCount] = useState(0);

  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

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
          <ButtonGeneralCount count={count} onClick={handleClick} />
          <ButtonGeneralCount count={count} onClick={handleClick} />
        </Grid>
      </Container>
      <Container>
        <Title level={2} caption="CounterA and CounterB" />
        <Text>Counters with useEffect hook case.</Text>
        <Grid>
          <button type="button" onClick={handleCounterAIncrement}>
            pressed the button {counterA} times
          </button>
          <button type="button" onClick={handleCounterBIncrement}>
            pressed the button {counterB} times
          </button>
        </Grid>
      </Container>
    </main>
  );
};
