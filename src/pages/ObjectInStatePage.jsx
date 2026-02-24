import { Main, Container, H, P, Grid, Card2 } from 'components';

import { objectsInState } from 'tasks';

const ObjectInStatePage = () => {
  const { tasks, Prac04, Task01, Task02, Task03 } = objectsInState;

  return (
    <Main>
      <Container>
        <H level={1}>object in state</H>
        <P>Object in state of React-component case.</P>
      </Container>
      <Container>
        <Grid>
          {tasks.map(({ title, task }, i) => (
            <Card2 key={i} title={title}>
              {task}
            </Card2>
          ))}
          <Card2
            title={
              <H level={2}>prac 04: write concise update logic with Immer</H>
            }
          >
            <Prac04 />
          </Card2>
          <Card2 title={<H level={2}>task 01: fix incorrect state updates</H>}>
            <Task01 />
          </Card2>
          <Card2 title={<H level={2}>task 02: find and fix the mutation</H>}>
            <Task02 />
          </Card2>
          <Card2 title={<H level={2}>task 03: update an object with immer</H>}>
            <Task03 />
          </Card2>
        </Grid>
      </Container>
    </Main>
  );
};

export { ObjectInStatePage };
