import { Container, H, P, Grid, Card, Main } from 'components';

import { arrayInState } from 'tasks';

const ArrayInStatePage = () => {
  const { tasks, Task01, Task02, Task03, Task04 } = arrayInState;

  return (
    <Main>
      <Container>
        <H level={1}>array in state</H>
        <P>Array in state of React-component case.</P>
      </Container>
      <Container>
        <Grid>
          {tasks.map(({ title, task }, i) => (
            <Card key={i} title={title}>
              {task}
            </Card>
          ))}
          <Card
            title={
              <H level={2}>task 01: update an item in the shopping cart</H>
            }
          >
            <Task01 />
          </Card>
          <Card
            title={
              <H level={2}>task 02: remove an item in the shopping cart</H>
            }
          >
            <Task02 />
          </Card>
          <Card
            title={
              <H level={2}>
                task 03: fix the mutations using non-mutative methods
              </H>
            }
          >
            <Task03 />
          </Card>
          <Card title={<H level={2}>task 04: fix the mutations using immer</H>}>
            <Task04 />
          </Card>
        </Grid>
      </Container>
    </Main>
  );
};

export { ArrayInStatePage };
