import { Main, Container, P, Grid, Card, Card2, H } from 'components';

import { managingStateP2 } from 'tasks';

const ManagingStatePageP2 = () => {
  const { tasks, Task03, Task04, Task05, Task06, Task07 } = managingStateP2;

  return (
    <Main>
      <Container>
        <H level={1}>managing state - part ii</H>
        <P>Managing state in react-components.</P>
      </Container>
      <Container>
        <Grid>
          {tasks.map(({ title, task }, i) => (
            <Card2 key={i} title={title}>
              {task}
            </Card2>
          ))}
          <Card title="task 03: fix disappering input text">
            <Task03 />
          </Card>
          <Card title="task 04: fix a component that's not updating">
            <Task04 />
          </Card>
          <Card title="task 05: reset a detail form">
            <Task05 />
          </Card>
          <Card title="task 06: clear an image while it's loading">
            <Task06 />
          </Card>
          <Card title="task 07: fix misplaced state in the list">
            <Task07 />
          </Card>
        </Grid>
      </Container>
    </Main>
  );
};

export { ManagingStatePageP2 };
