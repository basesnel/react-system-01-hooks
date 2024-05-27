import { Container } from 'components';
import { Title } from 'components';
import { Paragraph } from 'components';
import { Grid } from 'components';
import { Card } from 'components';

import { Prac01 } from 'tasks/ArrayInState';
import { Prac02 } from 'tasks/ArrayInState';
import { Prac03 } from 'tasks/ArrayInState';
import { Prac04 } from 'tasks/ArrayInState';
import { Prac05 } from 'tasks/ArrayInState';
import { Prac06 } from 'tasks/ArrayInState';
import { Prac07 } from 'tasks/ArrayInState';
import { Prac08 } from 'tasks/ArrayInState';
import { Task01 } from 'tasks/ArrayInState';
import { Task02 } from 'tasks/ArrayInState';
import { Task03 } from 'tasks/ArrayInState';
import { Task04 } from 'tasks/ArrayInState';

const ArrayInStatePage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="array in state" />
        <Paragraph>Array in state of React-component case.</Paragraph>
      </Container>
      <Container>
        <Grid>
          <Card title="prac 01: adding to an array">
            <Prac01 />
          </Card>
          <Card title="prac 02: removing from an array">
            <Prac02 />
          </Card>
          <Card title="prac 03: transforming an array">
            <Prac03 />
          </Card>
          <Card title="prac 04: replacing items in an array">
            <Prac04 />
          </Card>
          <Card title="prac 05: inserting into an array">
            <Prac05 />
          </Card>
          <Card title="prac 06: making other changes to an array">
            <Prac06 />
          </Card>
          <Card title="prac 07: updating objects inside arrays">
            <Prac07 />
          </Card>
          <Card title="prac 08: write concise update logic with immer">
            <Prac08 />
          </Card>
          <Card title="task 01: update an item in the shopping cart">
            <Task01 />
          </Card>
          <Card title="task 02: remove an item in the shopping cart">
            <Task02 />
          </Card>
          <Card title="task 03: fix the mutations using non-mutative methods">
            <Task03 />
          </Card>
          <Card title="task 04: fix the mutations using immer">
            <Task04 />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};

export { ArrayInStatePage };
