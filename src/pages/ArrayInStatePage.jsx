import { Container, H, P, Grid, Card, Main } from 'components';

import { arrayInState } from 'tasks';

const ArrayInStatePage = () => {
  const {
    Prac01,
    Prac02,
    Prac03,
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
        <H level={1} isPageTitle>
          array in state
        </H>
        <P>Array in state of React-component case.</P>
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
    </Main>
  );
};

export { ArrayInStatePage };
