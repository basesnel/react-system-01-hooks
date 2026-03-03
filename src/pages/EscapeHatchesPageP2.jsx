import { Main, Container, P, Grid, Card, Card2, H } from 'components';

import { escapeHatchesP02 } from 'tasks';

const EscapeHatchesPageP2 = () => {
  const { tasks, Task12, Task13, Task14 } = escapeHatchesP02;

  return (
    <Main>
      <Container>
        <H level={1}>escape hatches - part ii</H>
        <P>
          Escape hatches cases that may need to control and synchronize with
          system outside of React.
        </P>
      </Container>
      <Container>
        <Grid>
          {tasks.map(({ title, task }, i) => (
            <Card2 key={i} title={title}>
              {task}
            </Card2>
          ))}
          <Card title="task 12: fix a resetting interval">
            <Task12 />
          </Card>
          <Card title="task 13: fix a reconnecting chat">
            <Task13 />
          </Card>
          <Card title="task 14: fix a reconnecting chat II variant">
            <Task14 />
          </Card>
        </Grid>
      </Container>
    </Main>
  );
};

export { EscapeHatchesPageP2 };
