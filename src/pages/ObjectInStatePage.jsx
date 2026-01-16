import { Main, Container, H, P, Grid, Card } from 'components';

import { objectsInState } from 'tasks';

const ObjectInStatePage = () => {
  const { Prac01, Prac02, Prac03, Prac04, Task01, Task02, Task03 } =
    objectsInState;

  return (
    <Main>
      <Container>
        <H level={1}>object in state</H>
        <P>Object in state of React-component case.</P>
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
    </Main>
  );
};

export { ObjectInStatePage };
