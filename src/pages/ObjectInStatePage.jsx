import { Main, Container, H, P, Grid, Card2 } from 'components';

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
          <Card2
            title={
              <H level={2}>prac 01: copying objects with the spread syntax</H>
            }
          >
            <Prac01 />
          </Card2>
          <Card2 title={<H level={2}>prac 02: treat state as read-only</H>}>
            <Prac02 />
          </Card2>
          <Card2 title={<H level={2}>prac 03: updating a nested object</H>}>
            <Prac03 />
          </Card2>
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
