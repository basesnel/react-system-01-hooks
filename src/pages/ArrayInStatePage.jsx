import { Container, H, P, Grid, Card, Main } from 'components';

import { arrayInState } from 'tasks';

const ArrayInStatePage = () => {
  const {
    tasks,
    Prac04,
    Prac05,
    Prac06,
    Prac07,
    Prac08,
    Task01,
    Task02,
    Task03,
    Task04,
  } = arrayInState;

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
          <Card title={<H level={2}>prac 04: replacing items in an array</H>}>
            <Prac04 />
          </Card>
          <Card title={<H level={2}>prac 05: inserting into an array</H>}>
            <Prac05 />
          </Card>
          <Card
            title={<H level={2}>prac 06: making other changes to an array</H>}
          >
            <Prac06 />
          </Card>
          <Card
            title={<H level={2}>prac 07: updating objects inside arrays</H>}
          >
            <Prac07 />
          </Card>
          <Card
            title={
              <H level={2}>prac 08: write concise update logic with immer</H>
            }
          >
            <Prac08 />
          </Card>
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
