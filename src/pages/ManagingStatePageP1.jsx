import { Main, Container, P, Grid, Card, Card2, H } from 'components';

import { managingStateP1 } from 'tasks';

const ManagingStatePageP1 = () => {
  const {
    tasks,
    Prac07,
    Prac08,
    Prac09,
    Prac10,
    Task04,
    Task05,
    Task06,
    Task07,
    Task08,
    Task09,
  } = managingStateP1;

  return (
    <Main>
      <Container>
        <H level={1}>managing state - part i</H>
        <P>Managing state in react-components.</P>
      </Container>
      <Container>
        <Grid>
          {tasks.map(({ title, task }, i) => (
            <Card2 key={i} title={title}>
              {task}
            </Card2>
          ))}
          <Card title="prac 07: avoid dublication in state">
            <Prac07 />
          </Card>
          <Card title="prac 08: avoid deeply nested state">
            <Prac08 />
          </Card>
          <Card title="prac 09: avoid deeply nested state">
            <Prac09 />
          </Card>
          <Card title="prac 10: avoid deeply nested state (using immer)">
            <Prac10 />
          </Card>
          <Card title="task 04: fix a component that's not updating">
            <Task04 />
          </Card>
          <Card title="task 05: fix a brocken packing list">
            <Task05 />
          </Card>
          <Card title="task 06: fix the disappearing selection">
            <Task06 />
          </Card>
          <Card title="task 07: impliment multiple selection">
            <Task07 />
          </Card>
          <Card title="task 08: impliment multiple selection (alternate)">
            <Task08 />
          </Card>
          <Card title="task 09: impliment multiple selection (alternate)">
            <Task09 />
          </Card>
        </Grid>
      </Container>
    </Main>
  );
};

export { ManagingStatePageP1 };
