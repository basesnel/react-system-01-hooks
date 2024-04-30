import Container from 'components/Container';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Grid from 'components/Grid';
import Card from 'components/Card';

import ResettingKey from 'tasks/ResettingKey';
import StoringPrevState from 'tasks/StoringPrevState';

import Prac01 from 'tasks/SimpleStates/Prac01';
import Prac02 from 'tasks/SimpleStates/Prac02';
import Prac03 from 'tasks/SimpleStates/Prac03';
import Prac04 from 'tasks/SimpleStates/Prac04';
import Prac05 from 'tasks/SimpleStates/Prac05';
import Prac06 from 'tasks/SimpleStates/Prac06';
import Prac07 from 'tasks/SimpleStates/Prac07';
import Prac08 from 'tasks/SimpleStates/Prac08';
import Prac09 from 'tasks/SimpleStates/Prac09';

export const SimpleStatesPage = () => {
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
          <Card title="prac07: replace state after updating it">
            <Prac07 />
          </Card>
          <Card title="prac08: passing the initializer function">
            <Prac08 />
          </Card>
          <Card title="prac09: passing the initial state directly">
            <Prac09 />
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
