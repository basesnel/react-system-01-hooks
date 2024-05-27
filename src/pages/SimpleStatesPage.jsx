import { Container } from 'components';
import { Title } from 'components';
import { Paragraph } from 'components';
import { Grid } from 'components';
import { Card } from 'components';

import { Prac01 } from 'tasks/SimpleStates';
import { Prac02 } from 'tasks/SimpleStates';
import { Prac03 } from 'tasks/SimpleStates';
import { Prac04 } from 'tasks/SimpleStates';
import { Prac05 } from 'tasks/SimpleStates';
import { Prac06 } from 'tasks/SimpleStates';
import { Prac07 } from 'tasks/SimpleStates';
import { Prac08 } from 'tasks/SimpleStates';
import { Prac09 } from 'tasks/SimpleStates';
import { Prac10 } from 'tasks/SimpleStates';
import { Prac11 } from 'tasks/SimpleStates';

const SimpleStatesPage = () => {
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
          <Card title="prac10: resetting state with a key">
            <Prac10 />
          </Card>
          <Card title="prac11: storing information from previous renders">
            <Prac11 />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};

export { SimpleStatesPage };
