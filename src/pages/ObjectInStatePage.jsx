import { Container } from 'components';
import { Title } from 'components';
import { Paragraph } from 'components';
import { Grid } from 'components';
import { Card } from 'components';

import { Prac01 } from 'tasks/ObjectsInState';
import { Prac02 } from 'tasks/ObjectsInState';
import { Prac03 } from 'tasks/ObjectsInState';
import { Prac04 } from 'tasks/ObjectsInState';
import { Task01 } from 'tasks/ObjectsInState';
import { Task02 } from 'tasks/ObjectsInState';
import { Task03 } from 'tasks/ObjectsInState';

const ObjectInStatePage = () => {
  return (
    <main>
      <Container>
        <Title level={1} caption="object in state" />
        <Paragraph>Object in state of React-component case.</Paragraph>
      </Container>
      <Container>
        <Grid>
          <Card title="prac 01: copying objects with the spread syntax">
            <Prac01 />
          </Card>
          <Card title="prac 02: treat state as read-only">
            <Prac02 />
          </Card>
          <Card title="prac 03: updating a nested object">
            <Prac03 />
          </Card>
          <Card title="prac 04: write concise update logic with Immer">
            <Prac04 />
          </Card>
          <Card title="task 01: fix incorrect state updates">
            <Task01 />
          </Card>
          <Card title="task 02: find and fix the mutation">
            <Task02 />
          </Card>
          <Card title="task 03: update an object with immer">
            <Task03 />
          </Card>
        </Grid>
      </Container>
    </main>
  );
};

export { ObjectInStatePage };
