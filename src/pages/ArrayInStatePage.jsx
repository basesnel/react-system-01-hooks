import { Container, H, P, Grid, Card, Main } from 'components';

import { arrayInState } from 'tasks';

const ArrayInStatePage = () => {
  const { tasks } = arrayInState;

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
        </Grid>
      </Container>
    </Main>
  );
};

export { ArrayInStatePage };
