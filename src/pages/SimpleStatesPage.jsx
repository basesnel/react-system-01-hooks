import { useState } from 'react';

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
import Prac02 from 'tasks/SimpleStates/Prac02';
import Prac03 from 'tasks/SimpleStates/Prac03';
import Prac04 from 'tasks/SimpleStates/Prac04';
import Prac05 from 'tasks/SimpleStates/Prac05';
import Prac06 from 'tasks/SimpleStates/Prac06';

export const SimpleStatesPage = () => {
  const [numberC, setNumberC] = useState(0);

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
          <Card title="prac02: counter with general state">
            <Prac02 />
          </Card>
          <Card title="prac03: counter a and counter b">
            <Prac03 />
          </Card>
          <Card title="prac04: counter with reducer">
            <Prac04 />
          </Card>
          <Card title="prac05: update the same counter multiple times before the next render">
            <Prac05 />
          </Card>
          <Card title="prac06: update state after replacing it">
            <Prac06 />
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
